---
title: 'Exercise AG58: Absolute Norms under Idele Extension and Norm'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 2, printed p. 373, PDF p. 392
source_refs:
- S4/ch-VI/sec-2/ex-2
created: '2026-10-23'
---

# Exercise AG58: Absolute Norms under Idele Extension and Norm

## Problem Statement

> [!question] Neukirch VI.2.2
> Let $L|K$ be a finite extension. The absolute norm $\mathfrak N$ of idèles of $K$, resp. $L$, behaves as follows under the inclusion $i_{L|K}:I_K\to I_L$, resp. under the norm $N_{L|K}:I_L\to I_K$:
> $$
> \mathfrak N(i_{L|K}(\alpha))=\mathfrak N(\alpha)^{[L:K]}\quad\text{for }\alpha\in I_K,
> $$
> $$
> \mathfrak N(N_{L|K}(\alpha))=\mathfrak N(\alpha)\quad\text{for }\alpha\in I_L.
> $$

## Hints

> [!hint]- Hint
> Use normalized local absolute values: $|x|_w=|x|_v^{[L_w:K_v]}$ for $x\in K_v$, and $|N_{L_w/K_v}y|_v=|y|_w$.

> [!hint]- Stronger hint
> At each v use the sum of local degrees equal to [L:K] and the normalized identity |N(y)|_v=|y|_w.

## Solution

> [!success]- Independent derivation
> Use the standard absolute values for the number-field product formula: at finite places, $|x|_\mathfrak p=(\#\kappa_\mathfrak p)^{-v_\mathfrak p(x)}$, and at complex places, use the square of the usual complex modulus. The local extension formula gives
> $$
> \prod_{w\mid v}|\alpha_v|_w
> =|\alpha_v|_v^{\sum_{w\mid v}[L_w:K_v]}
> =|\alpha_v|_v^{[L:K]}.
> $$
> Taking the product over $v$ gives the first identity. For the second, use the definition by products of local norms:
> $$
> |(N_{L/K}\alpha)_v|_v
> =\prod_{w\mid v}|N_{L_w/K_v}\alpha_w|_v
> =\prod_{w\mid v}|\alpha_w|_w.
> $$
> Now take the product over all places. Only finitely many finite places have factors different from $1$, so these products are well defined.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

The statement was checked against images of the original book. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 2, printed p.373, PDF p.392]. The solution is an independent derivation.
