// 전체 이벤트를 관리할 Map 생성
/**
 * "click" => Map {
 *    button => [clickHandler1, clickHandler2],
 *    div => [divClickHandler1, divClickHandler2],
 * }
 */
const eventHandlers = new Map();

// 이벤트 설정이 되었는지 확인
// setupEvents = Set { "click", "input" }
const setupEvents = new Set();

export function setupEventListeners(root) {
  // 이벤트들이 등록되어 있다는 가정하에
  eventHandlers.forEach((elements, eventType) => {
    if (setupEvents.has(eventType)) {
      return;
    }

    root.addEventListener(
      eventType,
      (event) => {
        let target = event.target;

        while (target && target !== root) {
          // button => Handlers가 있는지 확인해서 가져오기
          if (elements.has(target)) {
            const elementHandlers = [...elements.get(target)];
            elementHandlers.forEach((handler) => {
              handler(event);
            });
          }

          if (event.cancelBubble) {
            break;
          }

          // 상위 요소로 이동
          target = target.parentNode;
        }
        // 이벤트 버블링
      },
      false,
    );

    setupEvents.add(eventType);
  });
}

export function addEvent(element, eventType, handler) {
  // eventType이 등록이 안되어있으면
  if (!eventHandlers.has(eventType)) {
    eventHandlers.set(eventType, new Map());

    // 새 이벤트 타입이면 리스너 설정이 필요할 수 있음
    // 함수 단일 원칙 책임 원칙이 지켜지지 않는다..!
    if (document.body) {
      setupEventListeners(document.body);
    }
  }

  const elements = eventHandlers.get(eventType);

  // 저장된 요소가 없으면
  if (!elements.has(element)) {
    elements.set(element, []);
  }

  // 이벤트가 중복으로 등록될 수 있는 문제가 있음
  // elements.get(element).push(handler);
  const handlers = elements.get(element);
  if (handlers.indexOf(handler) === -1) {
    handlers.push(handler);
  }
}

export function removeEvent(element, eventType, handler) {
  // 저장된 이벤트 타입이 없으면 종료
  if (!eventHandlers.has(eventType)) {
    return;
  }

  const elements = eventHandlers.get(eventType);

  // 저장된 요소가 없으면 종료
  if (!elements.has(element)) {
    return;
  }

  // 각 요소에 저장된 Handlers 가져오기
  const handlers = elements.get(element);
  // 두 함수가 같은 메모리 위치를 가르키기 때문에 같은 함수 인지 찾을 수 있음
  const index = handlers.indexOf(handler);

  // 일치하는게 있다면 제거
  if (index > -1) {
    handlers.splice(index, 1);
    // 저장된 핸들러가 없으면 요소 항목 제거
    if (handlers.length === 0) {
      elements.delete(element);
    }
  }
}
