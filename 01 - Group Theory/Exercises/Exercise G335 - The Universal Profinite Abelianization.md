---
title: 'Exercise G335: The Universal Profinite Abelianization'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 5, printed p. 265, PDF p. 284
source_refs:
- S4/ch-IV/sec-1/ex-5
created: '2026-10-23'
---

# Exercise G335: The Universal Profinite Abelianization

## Problem Statement

> [!question] Neukirch IV.1.5
> Let $G'$ be the closure of the commutator subgroup of a profinite group, and $G^{ab}=G/G'$. Show that every continuous homomorphism $G\to A$ into an abelian profinite group factorizes through $G^{ab}$.

## Hints

> [!hint]- Hint 1
> 任意到交换群的同态都杀死每个交换子；连续性使其核也包含交换子子群的闭包。

> [!hint]- Hint 2
> 商拓扑的泛性质保证因子映射连续，满射商映射保证唯一性。

## Solution

> [!success]- Independent derivation
> 令 $D=[G,G]$ 为抽象交换子子群，$G'=\overline D$。它为闭正规子群，因此前题使 $G^{ab}=G/G'$ 成为 profinite 群。$G/G'$ 交换，因为所有交换子在商中为恒等。
>
> 设 $f:G\to A$ 连续且 $A$ 交换。对每个 $x,y\in G$，$f(xyx^{-1}y^{-1})=1$，所以 $D\subseteq\ker f$。$A$ Hausdorff，使 $\{1\}$ 闭，从而 $\ker f$ 闭，故 $G'\subseteq\ker f$。因此唯一的抽象因子同态为
> $$
> \bar f:G/G'\longrightarrow A,\qquad gG'\longmapsto f(g).
> $$
> 它良定义。若 $U\subseteq A$ 开，$q^{-1}(\bar f^{-1}(U))=f^{-1}(U)$ 开；商拓扑的定义使 $\bar f^{-1}(U)$ 开，故 $\bar f$ 连续。$q$ 满射使任何满足 $f=\bar f q$ 的因子映射必须具有同一公式，唯一性亦证。

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups|Commutator Subgroup]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 5, printed p. 265, PDF p. 284]. 独立核与商拓扑证明。
- **Topology:** 取交换子子群的闭包是为了保持 profinite/Hausdorff 商；仅取抽象交换子子群并不能保证这个拓扑性质。
