---
title: 'Exercise AG38: The Replete Picard Group of the Integers'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 3, printed p. 193, PDF p. 212
source_refs:
- S4/ch-III/sec-1/ex-3
created: '2026-10-23'
---

# Exercise AG38: The Replete Picard Group of the Integers

## Problem Statement

> [!question] Neukirch III.1.3
> Show that the absolute norm $\mathfrak N:\operatorname{Pic}(\overline{\mathbb Z})\longrightarrow\mathbb R_+^*$ is an isomorphism.

## Hints

> [!hint]- Hint 1
> 把任意 replete ideal 写作 $(q)\times r$，其中 $q,r>0$；$\mathbb Q$ 只有一个无穷处。

> [!hint]- Hint 2
> 其范数是 $qr$。replete principal ideal $[q]$ 的有限部分是 $(q)$，无穷部分是 $q^{-1}$，故范数等于 $1$。

## Solution

> [!success]- Independent derivation
> 这里 $\overline{\mathbb Z}$ 表示本章包含无穷处的 replete 记号，并非 $\mathbb Z$ 的整闭包。任意 $\mathbb Z$ 的非零分式理想唯一写成 $(q)=q\mathbb Z$，其中 $q\in\mathbb Q_{>0}$。因此
> $$
> J(\overline{\mathbb Z})=\{((q),r):q\in\mathbb Q_{>0},\ r\in\mathbb R_{>0}\},\qquad \mathfrak N((q),r)=qr.
> $$
> 无穷处定义 $v_\infty(a)=-\log|a|$，所以 $[a]=((|a|),|a|^{-1})$。于是 $\mathfrak N([a])=1$，范数在商群上良定义并为同态。
>
> **满射：** 对任意 $t>0$，replete ideal $((1),t)$ 的范数为 $t$。
>
> **单射：** 若 $\mathfrak N((q),r)=1$，则 $r=q^{-1}$，所以 $((q),r)=[q]$，在 Picard 商群中为零类。更直接地，任意 $((q),r)$ 乘以 $[q^{-1}]$ 都化为 $((1),qr)$，故每个类恰有一个有限部分平凡的代表。
>
> 逆同态是 $t\mapsto[((1),t)]$。若考虑书中赋予的拓扑，它也是拓扑同构：逆映射由 $\mathbb R_{>0}\hookrightarrow J(\overline{\mathbb Z})$ 再接商映射得到，连续；范数本身连续。

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Replete Ideals and Arakelov Divisors|Replete Ideals and Arakelov Divisors]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Fractional Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 3, printed p. 193, PDF p. 212]. 独立计算，使用本节 replete ideal、principal ideal 及范数的定义 (1.4)–(1.5)，printed pp. 185–186 / PDF pp. 204–205；没有引用本题作为输入。
- **Notation:** 普通 $\operatorname{Pic}(\mathbb Z)$ 为平凡群；加入无穷处后才得到这里的 $\mathbb R_{>0}$。
