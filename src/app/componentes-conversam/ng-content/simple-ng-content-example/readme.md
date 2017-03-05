#Aprenda Angular do básico ao Avançado (http://aprendaangular.com)
# ng-content

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# Para que serve?
  - Permite que você possa incluir, pelo template html, componentes dentro de outro componente, aninhando os componetes. Por exemplo:
```html
    <meu-componente-pesquisa>
        <meu-botao-pesquisa></meu-botao-pesquisa>
    </meu-componente-pesquisa>
```

# Como é o template do componente meu-componente-pesquisa?
```html
    <input type="text">
    <b><ng-content></ng-content></b>

```

<tagA>
    <tagB></tagB>
</tagA>