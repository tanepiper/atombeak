import { Action, PICK_UP_FORK, PUT_DOWN_FORK } from './actions'

const initialLog: string[] = ['Dinner started. Waiting for philosophers to pick up their forks...']

// Records each action taken by a philosopher (pick up fork/put down fork)
// in a log that will be rendered to the screen.
export function logReducer(log: string[] = initialLog, action: Action): string[] {
  switch (action.type) {
    case PICK_UP_FORK:
      return [...log, `Philosopher ${action.philospherIndex} picked up fork ${action.forkIndex}`]
    case PUT_DOWN_FORK:
      return [...log, `Philosopher ${action.philospherIndex} put down fork ${action.forkIndex}`]
    default:
      return log
  }
}
