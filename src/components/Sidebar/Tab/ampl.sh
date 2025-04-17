max_slots=$(sysctl -n net.ipv4.tcp_max_syn_backlog)
used_slots=$(ss -n state SYN-RECV | wc -l)
free_slots=$((max_slots - used_slots))

echo "Количество свободных полуоткрытых слотов: $free_slots"