import {Request, Response} from 'express';

const handler = (req: Request, res: Response) => res.render('address', {
    title: 'This is the Address page',
    content: 'This is the content of Address page'
});

export default handler;
