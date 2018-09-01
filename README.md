# Laravel Nova Checkboxes Field

![Checkboxes in Laravel Nova](formPreview.png)

![Checkboxes in Laravel Nova](detailPreview.png)

![Checkboxes in Laravel Nova](indexPreview.png)

## Installation

`composer require silvanite/novafieldcheckboxes`

## Usage

```php
use Silvanite\NovaFieldCheckboxes\Checkboxes;

Checkboxes::make('Permissions')->options([
    'viewNova' => 'Access Admin UI',
    'manageUsers' => 'Manage Users',
]),
```

## Support

If you require any support please contact me on [Twitter](https://twitter.com/m2de_io) or open an issue on this repository.

## License

MIT
