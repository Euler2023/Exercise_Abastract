---
title: 'Exercise Gal201: Maximal Abelian Reciprocity and the Connected Component'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 1, printed p. 394, PDF p. 413
source_refs:
- S4/ch-VI/sec-5/ex-1
created: '2026-10-23'
---

# Exercise Gal201: Maximal Abelian Reciprocity and the Connected Component

## Problem Statement

> [!question] Neukirch VI.5.1
> If $D_K$ is the connected component of the unit element of $C_K$, and if $K^{ab}|K$ is the maximal abelian extension of $K$, then $C_K/D_K\simeq G(K^{ab}|K)$.

## Hints

> [!hint]- 提示
> Take the inverse limit of finite reciprocity maps. The norm-one factor is compact and the remaining positive-real factor is connected.

> [!hint]- Stronger hint
> The compact norm-one factor maps onto the inverse limit of finite reciprocity quotients; the common kernel is the connected component.

## Solution

> [!success]- 独立推导
> 对所有有限阿贝尔 $L/K$，互反律给连续满同态 $C_K\to G(L/K)$，它们在限制映射下相容，所以得到 $\theta:C_K\to G(K^{\mathrm{ab}}/K)$。每个有限目标离散，故它杀掉 $D_K$。
> 分裂范数给 $C_K=C_K^0\times\mathbb R_{>0}$，$\theta$ 杀掉第二因子。$C_K^0$ 紧，故其像闭；像在每个有限商上满，所以像在逆极限中稠密；因此 $\theta$ 满。
> 其核是所有有限阿贝尔范数群的交。全局存在定理（VI.(6.1), printed pp.395–396/PDF414–415）说这些恰是 $C_K$ 的全部闭有限指数子群。VI.§1 Exercises9–10 已把该交识别为 $D_K$。诱导的连续双射 $C_K^0/D_K^0\to G(K^{\mathrm{ab}}/K)$ 从紧空间到 Hausdorff 空间，故是同胚；结合正实因子被除去，得到题列拓扑同构。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 1, printed p.394, PDF p.413]。解答为独立推导。
