# 20210111 Mon 上課速記

## try / catch

### 幾種錯誤

1. 語法
2. 執行期 exception 例外
3. 邏輯

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

## 檔案上傳

https://www.npmjs.com/package/body-parser

### 使用 Multer

Multer, npm
https://www.npmjs.com/package/multer

沒有上傳表單，用 POSTMAN 測試

### uuid

uuid, npm
https://www.npmjs.com/package/uuid

固定長度

練習：上傳多個檔案

# 20210112 上課速記

## RESTful

- 一種建議方式，實際工作要看工作單位的規定

```
1.  list 列表
  GET
    /products/
    /product/

2. 單筆資料
  GET
    /product/12

3. 新增資料
  POST
    /product/

4. 修改單筆資料
  PUT
    /product/12

5. 刪除
  DELETE
    /product/12

------------------------------

2~4 就是 CRUD
大專路由， API 介面
功能先整理出來

------------------------------

req.query // query string
req.params // routes parameters
req.body // form.data
req.file(s)

------------------------------

res.end() // res.write()
res.send()
res.json()
res.render()

在程式裡不應該同時出現兩個（？），會出錯。在用的時候就四個選一個。

檔頭 headers
主體 body£

```

## 路由模組化

middleware 的概念是 Express 的核心概念

裝了 Chrome 的擴充 JSON Viewer 。方便自己開發的時候閱讀產生的 JSON 。
