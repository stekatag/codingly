---
title: "Master PHP 8.4: Top Features and Practical Tips"
excerpt: Explore PHP 8.4's latest features designed to enhance your development
  workflow. From property hooks and asymmetric visibility to new array functions
  and improved HTML5 support, this guide provides practical code examples to
  help you integrate these enhancements into your projects.
publishDate: 2024-12-20T20:43:00+02:00
image: /assets/php-8.4.jpg
category: technology
author: stefan-gogov
tags:
  - PHP 8.4 new features
  - PHP property hooks
  - Asymmetric visibility in PHP
  - PHP array helper functions
  - PHP 8.4 code examples
  - PHP HTML5 support
  - Multibyte string functions PHP
  - PHP 8.4 security enhancements
  - Upgrading to PHP 8.4
---
PHP 8.4 introduces a suite of enhancements aimed at refining development practices and boosting code efficiency. Let's delve deeper into these features, supplemented with practical code examples to illustrate their application.

## Property Hooks: Streamlining Property Management

Property hooks in PHP 8.4 allow developers to define custom behaviors directly within class properties, reducing the need for separate getter and setter methods. This leads to more concise and maintainable code.

*Example:*

```php
class User {
    private bool $isModified = false;

    public function __construct(
        private string $firstName,
        private string $lastName
    ) {}

    public string $fullName {
        get => "{$this->firstName} {$this->lastName}";
        set {
            [$this->firstName, $this->lastName] = explode(' ', $value, 2);
            $this->isModified = true;
        }
    }
}

$user = new User("John", "Doe");
echo $user->fullName; // Outputs: John Doe

$user->fullName = "Jane Smith";
echo $user->fullName; // Outputs: Jane Smith
```

In this example, accessing `$user->fullName` retrieves the concatenated first and last names, while assigning a new value updates both properties and sets the `$isModified` flag to `true`.

## Asymmetric Visibility: Fine-Grained Access Control

Asymmetric visibility enables different access levels for reading and writing class properties, offering greater control over property interactions.

*Example:*

```php
class Book {
    public private(set) string $title;
    public protected(set) string $author;

    public function __construct(string $title, string $author) {
        $this->title = $title;
        $this->author = $author;
    }
}

$book = new Book("1984", "George Orwell");
echo $book->title; // Outputs: 1984

$book->title = "Animal Farm"; // Error: Cannot modify title outside the class
```

Here, the `$title` property is publicly readable but can only be modified within the class, preventing external code from altering it.

## New Array Helper Functions: Enhanced Array Manipulation


PHP 8.4 introduces functions like `array_find()`, `array_find_key()`, `array_any()`, and `array_all()` to simplify common array operations.

*Example:*

```php
$array = ['apple', 'banana', 'cherry'];

$found = array_find($array, fn($value) => strlen($value) > 5);
echo $found; // Outputs: banana

$anyLong = array_any($array, fn($value) => strlen($value) > 6);
echo $anyLong ? 'Yes' : 'No'; // Outputs: Yes

$allShort = array_all($array, fn($value) => strlen($value) < 10);
echo $allShort ? 'Yes' : 'No'; // Outputs: Yes
```

These functions enhance code readability and reduce the need for manual iteration when performing array searches and validations.

## Simplified Object Instantiation with Method Chaining


PHP 8.4 allows method chaining on newly instantiated objects without requiring additional parentheses, resulting in cleaner syntax.

*Example:*

```php
$request = new Request()->setMethod('GET')->setUri('/home');
```
