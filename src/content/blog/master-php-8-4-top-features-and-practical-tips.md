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


This improvement enhances code readability, especially in scenarios involving fluent interfaces.

## Enhanced HTML5 Support in DOM Extension


The introduction of the `\Dom\HTMLDocument` class provides robust support for parsing and manipulating HTML5 documents.

*Example:*

```phtml
use Dom\HTMLDocument;

$html = '<!DOCTYPE html><html><body><p>Hello, World!</p></body></html>';
$doc = HTMLDocument::createFromString($html);

```


This feature simplifies working with modern web content within PHP applications.

## Multibyte String Functions: Improved Internationalization Support


New functions like `mb_trim()`, `mb_ltrim()`, `mb_rtrim()`, `mb_ucfirst()`, and `mb_lcfirst()` provide better handling of multibyte strings, essential for applications dealing with diverse character sets.


*Example:*

```php
$str = "   Multibyte Trim   ";
echo mb_trim($str); // Outputs: Multibyte Trim

```


These functions ensure accurate string manipulation in multilingual applications. 

## Improved Password Hashing Security


PHP 8.4 increases the default bcrypt cost from 10 to 12, enhancing the security of password hashing by making brute-force attacks more computationally intensive.

*Example:*

```php
$hash = password_hash('my_secure_password', PASSWORD_BCRYPT);

```

This change provides stronger password protection by default.

## Readonly Classes: Immutable Class Instances


Building upon the readonly properties introduced in PHP 8.1, PHP 8.4 allows you to define an entire class as readonly. When a class is marked as readonly, all its properties are automatically treated as immutable, simplifying the code and reducing boilerplate.

*Example:*

```php
readonly class Point {
    public function __construct(
        public int $x,
        public int $y
    ) {}
}

$point = new Point(3, 4);
echo $point->x; // Outputs: 3

$point->x = 5; // Error: Cannot modify readonly property

```


This feature ensures that instances of the `Point` class are immutable after creation, enhancing code reliability.


In summary, PHP 8.4 introduces various features designed to enhance developer productivity and code quality. From property hooks and asymmetric visibility to new array helper functions and improved HTML5 support, these enhancements streamline coding practices and promote more efficient development workflows. Upgrading to PHP 8.4 will enable developers to leverage these improvements, fostering the creation of robust and modern applications.

> For a comprehensive overview of all the new features and changes, refer to the [official PHP 8.4 release announcement](https://www.php.net/releases/8.4/en.php)
>
