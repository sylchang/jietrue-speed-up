import { Helmet } from 'react-helmet-async';
import React from 'react';

// 定義 SeoHead 元件的 Props 介面
interface SeoHeadProps {
  title: string;
  description: string;
  schema?: object;
}

/**
 * 這是一個可重複使用的 React 元件，用於管理頁面的 SEO 資訊。
 * 它使用 react-helmet-async 來動態更新 <head> 標籤中的內容。
 * * @param {string} title - 頁面的標題，顯示在瀏覽器標籤頁上。
 * @param {string} description - 頁面的元描述，用於搜尋引擎結果頁。
 * @param {object} schema - 可選的 JSON-LD 結構化資料物件，用於增強搜尋結果。
 */
const SeoHead: React.FC<SeoHeadProps> = ({ title, description, schema }) => {
  return (
    <Helmet>
      {/* 設定頁面標題 */}
      <title>{title}</title>

      {/* 設定元描述 */}
      <meta name="description" content={description} />

      {/* 導入 Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />

      {/* 如果有提供 schema，則將其添加到頁面中 */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}
    </Helmet>
  );
};

export default SeoHead;
