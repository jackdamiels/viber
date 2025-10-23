import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const error =
      typeof exceptionResponse === 'string'
        ? { message: exceptionResponse }
        : (exceptionResponse as object);

    // Add empathetic context based on error type
    const empatheticMessage = this.getEmpatheticMessage(status);
    const helpfulSuggestion = this.getHelpfulSuggestion(status);

    response.status(status).json({
      ...error,
      empatheticMessage,
      helpfulSuggestion,
      timestamp: new Date().toISOString(),
      path: request.url,
      support: {
        message: 'We\'re here to help you succeed',
        contact: 'For assistance, please reach out to our support team',
      },
    });
  }

  private getEmpatheticMessage(status: number): string {
    const messages = {
      [HttpStatus.BAD_REQUEST]: 'We noticed something unexpected in your request. Let\'s work together to fix this.',
      [HttpStatus.UNAUTHORIZED]: 'It looks like you need to authenticate first. We\'re here to help you get access.',
      [HttpStatus.FORBIDDEN]: 'We understand you\'re trying to access this resource, but it seems you don\'t have the necessary permissions.',
      [HttpStatus.NOT_FOUND]: 'We couldn\'t find what you\'re looking for. Let\'s help you navigate to the right place.',
      [HttpStatus.INTERNAL_SERVER_ERROR]: 'Something went wrong on our end. We apologize for the inconvenience and are working to resolve this.',
      [HttpStatus.SERVICE_UNAVAILABLE]: 'Our service is temporarily unavailable. We\'re working hard to restore it as quickly as possible.',
    };

    return messages[status] || 'We encountered an unexpected situation, but we\'re here to help you through it.';
  }

  private getHelpfulSuggestion(status: number): string {
    const suggestions = {
      [HttpStatus.BAD_REQUEST]: 'Please check your request parameters and try again.',
      [HttpStatus.UNAUTHORIZED]: 'Try logging in or refreshing your authentication token.',
      [HttpStatus.FORBIDDEN]: 'Contact your administrator to request the necessary permissions.',
      [HttpStatus.NOT_FOUND]: 'Verify the URL or endpoint you\'re trying to access.',
      [HttpStatus.INTERNAL_SERVER_ERROR]: 'Please try again in a moment. If the issue persists, contact support.',
      [HttpStatus.SERVICE_UNAVAILABLE]: 'Please wait a moment and try your request again.',
    };

    return suggestions[status] || 'If you continue to experience issues, please don\'t hesitate to reach out for help.';
  }
}
