export class Slack {
  public config: SlackConfig
  public url: string

  constructor(url: string, conf?: SlackConfig) {
    this.url = url
    this.config = { ...conf }
  }

  public sendMsg(payload: SlackPayload) {
    const params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ ...this.config, ...payload }),
    }
    UrlFetchApp.fetch(this.url, params)
  }
}

interface SlackConfig {
  channel?: string
  icon_emoji?: string
  icon_url?: string
  username?: string
}

interface SlackPayload {
  attachments?: SlackAttachment[]
  channel?: string
  icon_emoji?: string
  icon_url?: string
  text: string
  username?: string
}

interface SlackAttachment {
  author_icon?: string
  author_link?: string
  author_name?: string
  color?: string
  // see https://api.slack.com/docs/message-attachments
  fallback: string
  fields?: SlackAttachField[]
  footer?: string
  footer_icon?: string
  image_url?: string
  pretext?: string
  text?: string
  thumb_url?: string
  title?: string
  title_link?: string
  ts?: number
}

interface SlackAttachField {
  short?: boolean
  title?: string
  value?: string
}
