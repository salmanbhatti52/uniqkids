import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        redirectTo: 'onboarding',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
    },
    {
        path: 'registeras',
        loadChildren: () => import('./registeras/registeras.module').then(m => m.RegisterasPageModule)
    },
    {
        path: 'signin',
        loadChildren: () => import('./signin/signin.module').then(m => m.SigninPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
    },
    {
        path: 'forgotpassword',
        loadChildren: () => import('./forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
    },
    {
        path: 'cgprofile',
        loadChildren: () => import('./cgprofile/cgprofile.module').then(m => m.CgprofilePageModule)
    },
    {
        path: 'parentprofile',
        loadChildren: () => import('./parentprofile/parentprofile.module').then(m => m.ParentprofilePageModule)
    },
    {
        path: 'homescreen',
        loadChildren: () => import('./homescreen/homescreen.module').then(m => m.HomescreenPageModule)
    },
    {
        path: 'otp',
        loadChildren: () => import('./otp/otp.module').then(m => m.OtpPageModule)
    },
    {
        path: 'resetpassword',
        loadChildren: () => import('./resetpassword/resetpassword.module').then(m => m.ResetpasswordPageModule)
    },
    {
        path: 'termsandcondition',
        loadChildren: () => import('./termsandcondition/termsandcondition.module').then(m => m.TermsandconditionPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
    },
    {
        path: 'onboarding',
        loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingPageModule)
    },
    {
        path: 'child',
        loadChildren: () => import('./child/child.module').then(m => m.ChildPageModule)
    },
    {
        path: 'childprofile',
        loadChildren: () => import('./childprofile/childprofile.module').then(m => m.ChildprofilePageModule)
    },
    {
        path: 'addchild',
        loadChildren: () => import('./addchild/addchild.module').then(m => m.AddchildPageModule)
    },
    {
        path: 'medicationtime',
        loadChildren: () => import('./medicationtime/medicationtime.module').then(m => m.MedicationtimePageModule)
    },
    {
        path: 'caregiver',
        loadChildren: () => import('./caregiver/caregiver.module').then(m => m.CaregiverPageModule)
    },
    {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
    },
    {
        path: 'inbox',
        loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
    },
    {
        path: 'paymentto',
        loadChildren: () => import('./paymentto/paymentto.module').then(m => m.PaymenttoPageModule)
    },
    {
        path: 'paymenthistory',
        loadChildren: () => import('./paymenthistory/paymenthistory.module').then(m => m.PaymenthistoryPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
    },
    {
        path: 'requests',
        loadChildren: () => import('./requests/requests.module').then(m => m.RequestsPageModule)
    },
    {
        path: 'earning',
        loadChildren: () => import('./earning/earning.module').then(m => m.EarningPageModule)
    },
    {
        path: 'paymenthistory1',
        loadChildren: () => import('./paymenthistory1/paymenthistory1.module').then(m => m.Paymenthistory1PageModule)
    },
    {
        path: 'parentprofileview',
        loadChildren: () => import('./parentprofileview/parentprofileview.module').then(m => m.ParentprofileviewPageModule)
    },
    {
        path: 'childprofile1',
        loadChildren: () => import('./childprofile1/childprofile1.module').then(m => m.Childprofile1PageModule)
    },
    {
        path: 'requests1',
        loadChildren: () => import('./requests1/requests1.module').then(m => m.Requests1PageModule)
    },
    {
        path: 'cgviewprofile',
        loadChildren: () => import('./cgviewprofile/cgviewprofile.module').then(m => m.CgviewprofilePageModule)
    },
    {
        path: 'requestpopup',
        loadChildren: () => import('./requestpopup/requestpopup.module').then(m => m.RequestpopupPageModule)
    },
    {
        path: 'eatingtime',
        loadChildren: () => import('./eatingtime/eatingtime.module').then(m => m.EatingtimePageModule)
    },
    {
        path: 'snacktime',
        loadChildren: () => import('./snacktime/snacktime.module').then(m => m.SnacktimePageModule)
    },
    {
        path: 'likes',
        loadChildren: () => import('./likes/likes.module').then(m => m.LikesPageModule)
    },
    {
        path: 'dislikes',
        loadChildren: () => import('./dislikes/dislikes.module').then(m => m.DislikesPageModule)
    },
    {
        path: 'favoriteactivities',
        loadChildren: () => import('./favoriteactivities/favoriteactivities.module').then(m => m.FavoriteactivitiesPageModule)
    },
    {
        path: 'cghomescreen',
        loadChildren: () => import('./cghomescreen/cghomescreen.module').then(m => m.CghomescreenPageModule)
    },
    {
        path: 'cgprofile1',
        loadChildren: () => import('./cgprofile1/cgprofile1.module').then(m => m.Cgprofile1PageModule)
    },
    {
        path: 'cgviewprofile1',
        loadChildren: () => import('./cgviewprofile1/cgviewprofile1.module').then(m => m.Cgviewprofile1PageModule)
    },
    {
        path: 'profile1',
        loadChildren: () => import('./profile1/profile1.module').then(m => m.Profile1PageModule)
    },
    {
        path: 'agencyhomescreen',
        loadChildren: () => import('./agencyhomescreen/agencyhomescreen.module').then(m => m.AgencyhomescreenPageModule)
    },
    {
        path: 'cgsignup',
        loadChildren: () => import('./cgsignup/cgsignup.module').then(m => m.CgsignupPageModule)
    },
    {
        path: 'editchild',
        loadChildren: () => import('./editchild/editchild.module').then(m => m.EditchildPageModule)
    },
    {
        path: 'editmedication',
        loadChildren: () => import('./editmedication/editmedication.module').then(m => m.EditmedicationPageModule)
    },
    {
        path: 'editeating',
        loadChildren: () => import('./editeating/editeating.module').then(m => m.EditeatingPageModule)
    },
    {
        path: 'editsnack',
        loadChildren: () => import('./editsnack/editsnack.module').then(m => m.EditsnackPageModule)
    },
    {
        path: 'editlikes',
        loadChildren: () => import('./editlikes/editlikes.module').then(m => m.EditlikesPageModule)
    },
    {
        path: 'editdislikes',
        loadChildren: () => import('./editdislikes/editdislikes.module').then(m => m.EditdislikesPageModule)
    },
    {
        path: 'editfavorite',
        loadChildren: () => import('./editfavorite/editfavorite.module').then(m => m.EditfavoritePageModule)
    },
    {
        path: 'paymentmessage',
        loadChildren: () => import('./paymentmessage/paymentmessage.module').then(m => m.PaymentmessagePageModule)
    },
    {
        path: 'paymentdetail',
        loadChildren: () => import('./paymentdetail/paymentdetail.module').then(m => m.PaymentdetailPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map