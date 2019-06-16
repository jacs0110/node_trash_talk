function generateMessage(options) {
  let message = {}
  let task_message = ''
  let phrase_message = ''

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // generate message by different user
  switch (options.role) {
    case 'engineer':
      task_message = task.engineer[Math.floor(Math.random() * task.engineer.length)]
      phrase_message = phrase[Math.floor(Math.random() * phrase.length)]
      message = `身為一位工程師，${task_message}，${phrase_message} 吧！`
      break;
    case 'designer':
      task_message = task.designer[Math.floor(Math.random() * task.designer.length)]
      phrase_message = phrase[Math.floor(Math.random() * phrase.length)]
      message = `身為一位設計師，${task_message}，${phrase_message} 吧！`
      break;
    case 'entrepreneur':
      task_message = task.entrepreneur[Math.floor(Math.random() * task.entrepreneur.length)]
      phrase_message = phrase[Math.floor(Math.random() * phrase.length)]
      message = `身為一位創業家，${task_message}，${phrase_message} 吧！`
      break;
    default:
      message = '請在上方選擇你要說幹話的角色'
  }

  return message
}

module.exports = generateMessage