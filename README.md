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
 
## Configuration
you can customise how the values from checkbox fields are saved to your database .
By default it's will saved as integer , you can save it as string by using `withoutTypeCasting()`

```php
use Silvanite\NovaFieldCheckboxes\Checkboxes;

Checkboxes::make('Permissions')->options([
    1 => 'Access Admin UI',
    2 => 'Manage Users',
]->withoutTypeCasting()),
```

#### Example using eloquent 
you can pass eloquent collection for the options as

```php
use Silvanite\NovaFieldCheckboxes\Checkboxes;

Checkboxes::make('users')
    ->options(
        collect(App\user::get())
            ->mapWithKeys(function($user) {
                return [$user->id => $user->name];
            })
        )
    ->withoutTypeCasting(),
```

## Support

If you require any support please contact me on [Twitter](https://twitter.com/m2de_io) or open an issue on this repository.

## License

MIT
