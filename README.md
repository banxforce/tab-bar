# tab-bar
    底部导航栏,可自定义导航项  
   
    点击后icon变为icon-active同时跳转路由
   
    默认使用组件DefaultTabBar

    需要自己添加 router-view 

    自定义导航栏使用 TabBar 组件,内部使用TabBarItem组件

**TabBarItem组件:**

- props:
   - link 点击后跳转到对应的路由
   - active-color 活跃状态时对应文字的字体颜色
   
- slot:
  - item-icon 导航栏图标
  - item-icon-active 活跃状态下的图标
  - item-text 图标下方的文字

# 项目更新

## 版本 1.1.0 - 2023-12-13

### 新增功能
- 增加了DefaultTabBar组件,即导航栏的默认实现,包含首页('/home'), 分类('/category'), 购物车('/cart'), 我的('/profile')。
- 在TabBarItem中增加active-color 属性(props),可自定义点击后导航栏对应字体的颜色

### 改进
- 优化了文件的引用路径

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
