---
title: 'Exercise Gal194: Inert Primes in a Noncyclic Galois Extension'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §3, Exercise 1, printed p. 379, PDF p. 398
source_refs:
- S4/ch-VI/sec-3/ex-1
created: '2026-10-23'
---

# Exercise Gal194: Inert Primes in a Noncyclic Galois Extension

## Problem Statement

> [!question] Neukirch VI.3.1
> If the Galois extension $L|K$ is not cyclic, then there are at most finitely many primes of $K$ which do not split in $L$.

## Hints

> [!hint]- 提示
> Here “do not split” means there is only one prime above the prime of $K$. At an unramified such prime, the whole Galois group would be a cyclic decomposition group.

> [!hint]- Stronger hint
> One prime above an unramified p would make the whole Galois group equal to its cyclic decomposition group.

## Solution

> [!success]- 独立推导
> 先明确原书本节的 “nonsplit” 为在 $L$ 中只有一个上方素点，而不是“不完全分裂”。对未分歧有限素点 $\mathfrak p$，若其上只有一个素点 $\mathfrak P$，则分解群 $D_\mathfrak P=G(L/K)$。但未分歧局部 Galois 群等同有限剩余域扩张的 Galois 群，由 Frobenius 生成，是循环群，矛盾。
> 所以所有不分裂素点都在分歧素点及无限素点中。有限数域扩张仅在有限多个位置分歧，故集合有限。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §3, Exercise 1, printed p.379, PDF p.398]。解答为独立推导。若误将 nonsplit 译为“不完全分裂”，原陈述将错误；例如双二次扩张中有无穷多个不完全分裂素点。
