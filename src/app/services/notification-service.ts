import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private readonly deafultLifetime = 3000;
    
    constructor(private readonly messageService: MessageService) {
    }

    showError(message: string, life = this.deafultLifetime) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: message, life });
    }

    showSuccess(message: string, life = this.deafultLifetime) {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: message, life });
    }
}
