---
title: 'Exercise G334: Closed Normal Quotients of Profinite Groups'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 4, printed p. 265, PDF p. 284
source_refs:
- S4/ch-IV/sec-1/ex-4
created: '2026-10-23'
---

# Exercise G334: Closed Normal Quotients of Profinite Groups

## Problem Statement

> [!question] Neukirch IV.1.4
> Every quotient $G/H$ of a profinite group $G$ by a closed normal subgroup $H$ is a profinite group.

## Hints

> [!hint]- Hint 1
> 商群紧且 Hausdorff。需证明商单位元有开正规子群基。

> [!hint]- Hint 2
> 若 $O$ 为包含 $H$ 的开集，取开正规 $N\subseteq O$；则 $HN/H$ 是商中的开正规子群，并包含在给定商邻域中。

## Solution

> [!success]- Independent derivation
> 令 $q:G\to G/H$ 为商映射。连续像保持紧性，所以商紧；闭正规子群商为 Hausdorff：若 $g\notin H$，闭性及乘法连续性给出小邻域把 $gH$ 与 $H$ 分开，再平移即可分离任意不同陪集。
>
> 若 $W$ 是商单位元的邻域，则 $q^{-1}(W)$ 是包含 $H$ 的邻域。选 $G$ 的开正规基本子群 $N\subseteq q^{-1}(W)$。由于 $q^{-1}(W)$ 是 $H$-饱和的，$HN\subseteq q^{-1}(W)$。$HN$ 是正规子群，并因包含开子群 $N$ 而开，故 $HN/H=q(N)$ 为商中的开正规子群。这里商映射开，因为 $q^{-1}(q(U))=UH$ 是开集的平移并。
>
> 因此 $G/H$ 为紧 Hausdorff 群且具有开正规邻域基，符合本节 profinite 群定义。

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 4, printed p. 265, PDF p. 284]. 独立商拓扑证明。
- **Boundary:** $H$ 的闭性必要；非闭正规子群的商可能不是 Hausdorff。
