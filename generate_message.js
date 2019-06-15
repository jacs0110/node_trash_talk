function generateMessage(options) {
  let message = {}
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // define dummy data
  // const options = {
  //   entrepreneur: 'on'
  // }

  // generate message by different user
  if (options.engineer === 'on') {
    message['role'] = '工程師'
    message['task'] = task.engineer[Math.floor(Math.random() * task.engineer.length)]
    message['phrase'] = phrase[Math.floor(Math.random() * phrase.length)]
  } else if (options.designer === 'on') {
    message['role'] = '設計師'
    message['task'] = task.designer[Math.floor(Math.random() * task.designer.length)]
    message['phrase'] = phrase[Math.floor(Math.random() * phrase.length)]
  } else if (options.entrepreneur === 'on') {
    message['role'] = '創業家'
    message['task'] = task.entrepreneur[Math.floor(Math.random() * task.entrepreneur.length)]
    message['phrase'] = phrase[Math.floor(Math.random() * phrase.length)]
  }

  return message
}

module.exports = generateMessage