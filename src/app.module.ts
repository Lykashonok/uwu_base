import { AppController } from './app.controller';
import { uwuModule, uwuRouter } from 'uwu-framework/core';

@uwuRouter({
    routes : [
        {path: '', target: AppController},
    ]
})
class AppRouter {}

@uwuModule({
    imports: [
        AppRouter
    ],
    exports: [
        AppController,
    ],
})
export class AppModule {}