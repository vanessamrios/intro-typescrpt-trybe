import { NextFunction, Request, Response } from 'express';

function stringIsValid(myString: string) : boolean {
  return typeof myString === 'string';
}

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send({ error: 'Username is required' });
  }
  if (username.length < 3) {
    return res.status(422).send({ error: 
        'Username must be longer than 2 characters' });
  }
  if (!stringIsValid(username)) {
    return res.status(422).send({ error: 
      'Username must be a string' });
  }
  return next();
};

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) {
    return res.status(400).send({ error: 'Classe is required' });
  }
  if (classe.length < 3) {
    return res.status(422).send({ error: 
        'Classe must be longer than 2 characters' });
  }
  if (!stringIsValid(classe)) {
    return res.status(422).send({ error: 
      'Classe must be a string' });
  }
  return next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level === undefined) {
    return res.status(400).send({ error: 'Level is required' });
  }
  if (!Number.isInteger(level)) {
    return res.status(422).send({ error: 
      'Level must be a number' });
  }
  if (level <= 0) {
    return res.status(422).send({ error: 
        'Level must be greater than 0' });
  }
  return next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).send({ error: 'Password is required' });
  }
  if (password.length < 8) {
    return res.status(422).send({ error: 
        'Password must be longer than 7 characters' });
  }
  if (!stringIsValid(password)) {
    return res.status(422).send({ error: 
      'Password must be a string' });
  }
  return next();
};

export {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
};