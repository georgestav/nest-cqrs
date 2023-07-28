# NestJS CQRS + DDD + Specification Pattern Template

This project is a template for a NestJS application that follows the CQRS, DDD, and Specification Patterns architectural styles. It provides a solid foundation for building scalable, maintainable, and organized applications.

## Table of Contents

- [Introduction](#introduction)
- [CQRS - Command Query Responsibility Segregation](#cqrs---command-query-responsibility-segregation)
  - [What is CQRS?](#what-is-cqrs)
  - [Example Usage](#example-usage)
- [DDD - Domain-Driven Design](#ddd---domain-driven-design)
  - [What is DDD?](#what-is-ddd)
  - [Example Usage](#example-usage-1)
- [Specification Pattern](#specification-pattern)
  - [What is the Specification Pattern?](#what-is-the-specification-pattern)
  - [Example Usage](#example-usage-2)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a boilerplate for building NestJS applications using CQRS, DDD, and Specification Pattern. CQRS helps in segregating read and write operations, leading to better separation of concerns. DDD encourages modeling the business domain explicitly, leading to a more maintainable codebase. Specification Pattern allows you to encapsulate complex conditions and business rules.

## CQRS - Command Query Responsibility Segregation

### What is CQRS?

CQRS is an architectural pattern that suggests splitting the application's read and write operations into separate models. The core idea is to use separate models for updating information (commands) and querying information (queries). This separation allows you to optimize the read and write sides independently, leading to better scalability, performance, and maintainability.

### Example Usage

In a traditional CRUD-based application, you might have a single model for handling both read and write operations. In CQRS, you would separate these concerns into separate models:

- **Commands**: Responsible for handling create, update, and delete operations.
- **Queries**: Responsible for fetching data and querying the database.

Here's a basic example of a "CreateUserCommand" and "GetUserQuery":

```typescript
// CreateUserCommand.ts
export class CreateUserCommand {
  constructor(public readonly username: string, public readonly email: string) {}
}

// GetUserQuery.ts
export class GetUserQuery {
  constructor(public readonly userId: string) {}
}
```
### DDD - Domain-Driven Design
#### What is DDD?
Domain-Driven Design is a software development approach that focuses on understanding and modeling the business domain explicitly. It emphasizes collaboration between domain experts and developers to create a shared understanding of the domain. DDD helps in building complex applications that are easier to maintain and evolve.

### Example Usage
In DDD, you organize your application's codebase around the domain concepts. For example, you might have the following folders:

* src 
  * users 
  * user.entity.ts (The User entity representing the domain object)
  * user.repository.ts (The repository responsible for persisting User entities)
  * user.service.ts (The service handling business logic related to User entities)

### Specification Pattern
#### What is the Specification Pattern?
The Specification Pattern is a design pattern used to encapsulate complex conditions or business rules in a reusable and composable way. It allows you to build expressive and flexible queries for data retrieval or validation.

### Example Usage
Suppose you want to retrieve all active users who are older than 18 years. Instead of hardcoding the query in your repository, you can use a Specification to encapsulate this condition:

```typescript
// ActiveAndAdultSpecification.ts
import { Specification } from 'specification-pattern';

export class ActiveAndAdultSpecification implements Specification<User> {
isSatisfiedBy(user: User): boolean {
return user.isActive && user.age > 18;
}
}
```
Now, you can use this specification in your repository:

```typescript
// UserRepository.ts
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { ActiveAndAdultSpecification } from './ActiveAndAdultSpecification';

export class UserRepository {
constructor(private readonly userRepository: Repository<User>) {}

async findActiveAdultUsers(): Promise<User[]> {
const specification = new ActiveAndAdultSpecification();
return this.userRepository.find(specification.toCriteria());
}
}
```

### Getting Started
Clone this repository and navigate into the project directory.
1. Install dependencies using npm install or yarn install.
2. Copy the .env.example to .env
3. Start the development server using npm run start:dev.
4. Feel free to modify and extend this template according to your application's specific requirements.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
