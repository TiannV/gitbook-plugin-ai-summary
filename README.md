# gitbook-plugin-ai-summary
gitbook ai摘要插件

注册[MemFire](https://cloud.memfiredb.com/auth/login?from=1HdvKv)创建应用后建表

![table](https://img.itrunner.cn/file/19918b4389f71ac811616.png)

book.json 配置
```
{
    "plugins": [
        "ai-summary"
    ],
    "pluginsConfig": {
        "ai-summary": {
            "summary_url": "后端summary地址",
            "supabase_url": "supabase应用地址",
            "supabase_key": "supabase应用key"
        },
    }
}
```

参考https://github.com/TiannV/ai-summary
