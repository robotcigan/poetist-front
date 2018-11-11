<template lang="pug">
  #main-header
    header.main-header
      .main-header__container.grid.grid--container
        .row.row--sm-center
          .col.col--md-3
            a(href="").logo
              img(src="src/assets/img/logo.svg", alt="")
          .col.col--md-6
            .nav
              .nav__link
                router-link(to="/poems").nav__link Стихи
              .nav__link
                router-link(to="/poets").nav__link Поэты
              .nav__link
                router-link(to="/") Эпохи
          .col.col--md-3
            .donate Помочь проекту
</template>

<script>
export default {
  name: 'main-header'
}
</script>

