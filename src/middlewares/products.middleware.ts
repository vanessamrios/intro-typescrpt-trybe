import { NextFunction, Request, Response } from 'express';

function stringIsValid(myString: string) : boolean {
  return typeof myString === 'string';
}

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ error: 'Name is required' });
  }
  if (name.length < 3) {
    return res.status(422).send({ error: 
        'Name must be longer than 2 characters' });
  }
  if (!stringIsValid(name)) {
    return res.status(422).send({ error: 
      'Name must be a string' });
  }
  return next();
};

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).send({ error: 'Amount is required' });
  }
  if (amount.length < 3) {
    return res.status(422).send({ error: 
        'Amount must be longer than 2 characters' });
  }
  if (!stringIsValid(amount)) {
    return res.status(422).send({ error: 
      'Amount must be a string' });
  }
  return next();
};

export {
  validateName,
  validateAmount,
};