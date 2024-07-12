(()=>{"use strict";!function(){class t{constructor(t,e,s,o,n){this.title=t,this.desc=e,this.dueDate=s,this.priority=o,this.isComplete=!1}changeIsComplete(){this.isComplete=!this.isComplete}changePriority(t){this.priority=t}}class e{constructor(t,e){this.name=t,this.desc=e,this.tasks=[]}newTodo(e,s,o,n,c){let i=new t(e,s,o,n,c);return this.tasks.push(i),i}deleteTodo(t){return this.tasks=this.tasks.filter((e=>e.title!=t))}get getTasks(){return this.tasks}get getProjName(){return this.name}}const s=new class{constructor(){this.projects=[]}newProject(t,s){let o=new e(t,s);return this.projects.push(o),o}deleteItem(t){return this.projects=this.projects.filter((e=>e.name!=t))}get getProjects(){return this.projects}};s.newProject("test project","test description"),s.newProject("empty project","empty project test description"),s.projects[0].newTodo("Test title","this is a test","07-12-24","high"),s.projects[0].newTodo("Test 2","Test 2 description","07-13-24","high"),s.projects[0].tasks[0].changePriority("low"),s.deleteItem("empty project"),s.projects[0].deleteTodo("Test 2"),console.log(s.projects[0].getTasks),console.log(s.getProjects);const o=document.querySelector("body"),n=document.createElement("div");n.classList.add("content");const c=document.createElement("h1");c.classList.add("title"),c.textContent="Todo or Not Todo",n.appendChild(c),s.projects.forEach((t=>{const e=document.createElement("div");e.classList.add("project-div");const s=document.createElement("h3");s.classList.add("project-name"),s.textContent=t.getProjName,e.appendChild(s),t.tasks.forEach((t=>{const s=document.createElement("div");s.classList.add("task-content");const o=document.createElement("p");o.classList.add("task-name"),o.textContent=`Task Name: ${t.title}`;const n=document.createElement("p");n.classList.add("task-description"),n.textContent=`Task Description: ${t.desc}`;const c=document.createElement("p");c.classList.add("task-due"),c.textContent=`Task Due Date: ${t.dueDate}`;const i=document.createElement("p");i.classList.add("task-priority"),i.textContent=`Task Priority: ${t.priority}`,s.appendChild(o),s.appendChild(n),s.appendChild(c),s.appendChild(i),e.appendChild(s)})),n.appendChild(e)})),o.appendChild(n)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksb0JBQ3ZCVSxFQUFTVCxZQUFjLHFCQUFxQk0sRUFBSzFDLE9BRWpELE1BQU04QyxFQUFVaEIsU0FBU0csY0FBYyxLQUN2Q2EsRUFBUVosVUFBVUMsSUFBSSxZQUN0QlcsRUFBUVYsWUFBYyxrQkFBa0JNLEVBQUt6QyxVQUU3QyxNQUFNOEMsRUFBZWpCLFNBQVNHLGNBQWMsS0FDNUNjLEVBQWFiLFVBQVVDLElBQUksaUJBQzNCWSxFQUFhWCxZQUFjLGtCQUFrQk0sRUFBS3hDLFdBRWxEeUMsRUFBWU4sWUFBWU8sR0FDeEJELEVBQVlOLFlBQVlRLEdBQ3hCRixFQUFZTixZQUFZUyxHQUN4QkgsRUFBWU4sWUFBWVUsR0FDeEJQLEVBQVFILFlBQVlNLEVBQVksSUFNcENYLEVBQVFLLFlBQVlHLEVBQVEsSUFHaENYLEVBQUtRLFlBQVlMLEVBRXJCLENDeElBZ0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZFBhZ2UoKXtcbiAgICBjbGFzcyBUb2Rve1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpe1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjaGFuZ2VJc0NvbXBsZXRlKCl7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSAhdGhpcy5pc0NvbXBsZXRlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNoYW5nZVByaW9yaXR5KG5ld1ByaW9yaXR5KXtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbGFzcyBQcm9qZWN0c3tcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSwgZGVzYyl7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5kZXNjID0gZGVzY1xuICAgICAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIG5ld1RvZG8odGl0bGUsZGVzYyxkdWVEYXRlLHByaW9yaXR5LCBpc0NvbXBsZXRlKXtcbiAgICAgICAgICAgIGxldCB0ID0gbmV3IFRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKVxuICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKHQpO1xuICAgICAgICAgICAgcmV0dXJuIHRcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZVRvZG8oaWQpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcih0YXNrVGl0bGUgPT4gdGFza1RpdGxlLnRpdGxlICE9IGlkKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBnZXQgZ2V0VGFza3MoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGdldCBnZXRQcm9qTmFtZSgpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbGFzcyBQcm9qZWN0TGlie1xuICAgICAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbmV3UHJvamVjdChuYW1lLCBkZXNjKXtcbiAgICAgICAgICAgIGxldCBwID0gbmV3IFByb2plY3RzKG5hbWUsIGRlc2MpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHApO1xuICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGVJdGVtKGlkKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvalRpdGxlID0+IHByb2pUaXRsZS5uYW1lICE9IGlkKVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGdldCBnZXRQcm9qZWN0cygpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGVzdCA9IG5ldyBQcm9qZWN0TGliKCk7XG4gICAgXG4gICAgdGVzdC5uZXdQcm9qZWN0KCd0ZXN0IHByb2plY3QnLCAndGVzdCBkZXNjcmlwdGlvbicpO1xuICAgIHRlc3QubmV3UHJvamVjdCgnZW1wdHkgcHJvamVjdCcsICdlbXB0eSBwcm9qZWN0IHRlc3QgZGVzY3JpcHRpb24nKTtcblxuICAgIFxuICAgIFxuICAgIHRlc3QucHJvamVjdHNbMF0ubmV3VG9kbygnVGVzdCB0aXRsZScsICd0aGlzIGlzIGEgdGVzdCcsICcwNy0xMi0yNCcsICdoaWdoJyk7XG4gICAgdGVzdC5wcm9qZWN0c1swXS5uZXdUb2RvKCdUZXN0IDInLCAnVGVzdCAyIGRlc2NyaXB0aW9uJywgJzA3LTEzLTI0JywgJ2hpZ2gnKTtcbiAgICB0ZXN0LnByb2plY3RzWzBdLnRhc2tzWzBdLmNoYW5nZVByaW9yaXR5KCdsb3cnKTtcblxuICAgIHRlc3QuZGVsZXRlSXRlbSgnZW1wdHkgcHJvamVjdCcpO1xuICAgIHRlc3QucHJvamVjdHNbMF0uZGVsZXRlVG9kbygnVGVzdCAyJyk7XG4gICAgXG4gICAgY29uc29sZS5sb2codGVzdC5wcm9qZWN0c1swXS5nZXRUYXNrcyk7XG4gICAgY29uc29sZS5sb2codGVzdC5nZXRQcm9qZWN0cyk7XG4gICAgXG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVG9kbyBvciBOb3QgVG9kbydcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHRlc3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwcm9qTmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgcHJvak5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFByb2pOYW1lO1xuXG4gICAgICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQocHJvak5hbWUpO1xuXG4gICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICAgICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gYFRhc2sgTmFtZTogJHt0YXNrLnRpdGxlfWA7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSBgVGFzayBEZXNjcmlwdGlvbjogJHt0YXNrLmRlc2N9YDtcblxuICAgICAgICAgICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRhc2tEdWUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUnKTtcbiAgICAgICAgICAgIHRhc2tEdWUudGV4dENvbnRlbnQgPSBgVGFzayBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YDtcblxuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBUYXNrIFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YDtcblxuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0R1ZSk7XG4gICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICAgICAgcHJvakRpdi5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvakRpdik7XG4gICAgfSk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIFxufSIsImltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSBcIi4vbG9hZFBhZ2VcIjtcblxubG9hZFBhZ2UoKTsiXSwibmFtZXMiOlsiVG9kbyIsImNvbnN0cnVjdG9yIiwidGl0bGUiLCJkZXNjIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiaXNDb21wbGV0ZSIsInRoaXMiLCJjaGFuZ2VJc0NvbXBsZXRlIiwiY2hhbmdlUHJpb3JpdHkiLCJuZXdQcmlvcml0eSIsIlByb2plY3RzIiwibmFtZSIsInRhc2tzIiwibmV3VG9kbyIsInQiLCJwdXNoIiwiZGVsZXRlVG9kbyIsImlkIiwiZmlsdGVyIiwidGFza1RpdGxlIiwiZ2V0VGFza3MiLCJnZXRQcm9qTmFtZSIsInRlc3QiLCJwcm9qZWN0cyIsIm5ld1Byb2plY3QiLCJwIiwiZGVsZXRlSXRlbSIsInByb2pUaXRsZSIsImdldFByb2plY3RzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJmb3JFYWNoIiwicHJvamVjdCIsInByb2pEaXYiLCJwcm9qTmFtZSIsInRhc2siLCJ0YXNrQ29udGVudCIsInRhc2tOYW1lIiwidGFza0Rlc2MiLCJ0YXNrRHVlIiwidGFza1ByaW9yaXR5IiwibG9hZFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9