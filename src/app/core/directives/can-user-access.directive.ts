import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { UserProfileService } from './../../services/user-profile-service';

@Directive({ selector: '[canUserAccess]' })
export class CanUserAccessDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private readonly userProfileService: UserProfileService) {
    }

    @Input()
    set canUserAccess(permssion: string) {
        if (this.userProfileService.hasPermission(permssion)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}