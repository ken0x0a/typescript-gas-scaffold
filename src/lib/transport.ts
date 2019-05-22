export class Transport {

  public static get(url: string): GoogleAppsScript.URL_Fetch.HTTPResponse {
    return UrlFetchApp.fetch(url)
  }
  public static html(rawHtml: string): GoogleAppsScript.HTML.HtmlOutput {
    return HtmlService.createHtmlOutput(rawHtml)
  }

  public static htmlFromFile(path: string): GoogleAppsScript.HTML.HtmlOutput {
    return HtmlService.createHtmlOutputFromFile(path).setSandboxMode(HtmlService.SandboxMode.IFRAME)
  }

  public static json(payload: object): GoogleAppsScript.Content.TextOutput {
    const output = ContentService.createTextOutput()
    output.setMimeType(ContentService.MimeType.JSON)
    output.setContent(JSON.stringify(payload))
    return output
  }

  public static redirectTo(targetUrl: string, info = ''): GoogleAppsScript.HTML.HtmlOutput {
    return HtmlService.createHtmlOutput(`
      <div class="info">${info}</div>
      <script>window.top.location.href='${targetUrl}';</script>
    `)
  }

  public static text(value: string): GoogleAppsScript.Content.TextOutput {
    return ContentService.createTextOutput(value)
  }
}

export interface FetchOption {
  contentType?: string
  escaping?: boolean
  followRedirects?: boolean
  headers?: object
  method?: HttpMethods
  muteHttpExceptions?: boolean
  payload?: string
  validateHttpsCertificates?: boolean
}

enum HttpMethods {
  get,
  delete,
  patch,
  post,
  put,
}
