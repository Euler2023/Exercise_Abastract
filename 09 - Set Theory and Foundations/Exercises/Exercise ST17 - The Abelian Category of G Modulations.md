---
title: 'Exercise ST17: The Abelian Category of G Modulations'
topic: set-theory
difficulty: advanced
status: not-started
tags:
- exercise
- set-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 9, printed p. 307, PDF p. 326
source_refs:
- S4/ch-IV/sec-6/ex-9
created: '2026-10-23'
---

# Exercise ST17: The Abelian Category of G Modulations

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 9
> $G$-modulations form an abelian category.

## Hints

> [!hint]- Hint 1 — first step
> Try defining the kernel and cokernel of a modulation morphism separately at every finite $G$-set.

> [!hint]- Hint 2 — proof route
> Compute kernels and cokernels object by object. The finite-product and base-change identities descend to these groups because all structure maps commute with the original morphism.

## Solution

> [!success]- 独立推导
> 设 $\eta:A\to B$ 为 $G$-modulation 同态。逐对象定义 $K(X)=\ker\eta_X$，$C(X)=\operatorname{coker}\eta_X$。因 $\eta$ 同时与 $f^*,f_*$ 交换，所有限制/转移均保持核，并诱导商上的映射。因此 $K,C$ 都有双函子结构。
> 有限直积上的核与余核逐分量计算，故 $K(X\sqcup Y)=K(X)\times K(Y)$，$C(X\sqcup Y)=C(X)\times C(Y)$。每个拉回方块的 Mackey 恒等式在 $A,B$ 中成立；限制到核，或投影到余核，仍成立。因此 $K,C$ 仍为 $G$-modulation，并具有逐对象的核/余核泛性质。
> 零函子是零对象，逐对象直和给有限双积；同态群相加使此范畴为加性范畴。像与余像也逐对象计算，$\operatorname{coim}\eta_X\to\operatorname{im}\eta_X$ 在阿贝尔群范畴中为同构，并且与全部结构映射相容。因此全函子的余像到像为同构。加性、核余核存在、余像等于像共同给阿贝尔范畴公理。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Groups and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

题面已与原书200 dpi图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 9, printed p.307, PDF p.326]。解答为独立推导。Galois descent 不属于一般 modulation 的定义，本题没有加入它。
