
# --  Color   -- #
_CYAN  = \033[36m
_GREEN = \033[32m
_RED   = \033[31m
_ENDL  = \033[0m

DB_NAME= db

.PHONY: all
all:
	@docker-compose up --build -d
	@echo "$(_GREEN) Docker Container was created $(_ENDL)"

.PHONY: no-detach
no-detach:
	@docker-compose up --build
	@echo "$(_GREEN) Docker Container was created $(_ENDL)"

.PHONY: re
re: fclean all

.PHONY: clean
clean:
	@docker-compose stop
	@echo "$(_GREEN) Docker Container was stopped $(_ENDL)"

.PHONY: fclean
fclean: clean
	@docker system prune -af
	@echo "$(_GREEN) Docker Container was removed $(_ENDL)"


# SHORTCUT 
# - vous permez de rentrer dans votre container.
# - utile pour faire les installations de packages.

.PHONY: enter-server
enter-server:
	@echo "$(_CYAN) You $(_GREEN)entered$(_CYAN) the BackEnd container $(_ENDL)"
	@docker exec -it server sh
	@echo "$(_CYAN) You $(_RED)exited$(_CYAN) the BackEnd container $(_ENDL)"

.PHONY: enter-db
enter-db:
	@echo "$(_CYAN) You $(_GREEN)entered$(_CYAN) the DB container $(_ENDL)"
	@docker exec -it ${DB_NAME} sh
	@echo "$(_CYAN) You $(_RED)exited$(_CYAN) the BDD container $(_ENDL)"

.PHONY: enter-client
enter-client:
	@echo "$(_CYAN) You $(_GREEN)entered$(_CYAN) the client container $(_ENDL)"
	@docker exec -it client sh
	@echo "$(_CYAN) You $(_RED)exited$(_CYAN) the client container $(_ENDL)"


# SHORTCUT 
# - vous permez d'afficher les logs d'un container.
# - utile les tests preliminaire et debug.

.PHONY: log-server
log-server:
	@docker logs --tail 100 server -f

.PHONY: log-file_service
log-file_service:
	@docker logs --tail 100 file_service -f

.PHONY: log-db
log-db:
	@docker logs --tail 100 ${DB_NAME} -f

.PHONY: log-client
log-client:
	@docker logs --tail 100 client -f


