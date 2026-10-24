---
title: 'Exercise Gal205: Power Subgroups as Intersections of Norm Groups'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 3, printed p. 404, PDF p. 423
source_refs:
- S4/ch-VI/sec-6/ex-3
created: '2026-10-23'
---

# Exercise Gal205: Power Subgroups as Intersections of Norm Groups

## Problem Statement

> [!question] Neukirch VI.6.3
> The group $(C_K)^n=(I_K)^nK^*/K^*$ is the intersection of the norm groups $N_{L|K}C_L$ of all abelian extensions $L|K$ of exponent $n$.

## Hints

> [!hint]- Hint
> Pass to the maximal abelian Galois group. Its quotient by $n$-th powers is a profinite group of exponent dividing $n$, separated by its finite quotients.

> [!hint]- Stronger hint
> The divisible connected component lies in every power subgroup; the remaining compact quotient is separated by finite characters of exponent dividing n.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Here "exponent $n$" means exponent dividing $n$, as customary in class field theory. Restricting instead to sufficiently many extensions of exact exponent $n$ would require a separate existence argument; these interpretations should not be mixed.
> By VI.§5, Exercise 1, we have $C_K/D_K\cong G=\operatorname{Gal}(K^{\mathrm{ab}}/K)$. The connected component $D_K$ is built from solenoids, circles, and real lines and is divisible, so $D_K=(D_K)^n\subseteq(C_K)^n$. Therefore
> $$
> C_K/(C_K)^n\cong G/G^n.
> $$
> Since $G$ is compact and the $n$th-power map is continuous, $G^n$ is closed. The quotient $G/G^n$ is a profinite abelian group of exponent dividing $n$, and the intersection of its open subgroups is the identity.
> A finite abelian $L/K$ has exponent dividing $n$ if and only if the kernel of its reciprocity quotient contains $(C_K)^n$. That kernel is $N_{L/K}C_L$. Any class outside $(C_K)^n$ remains nontrivial in some finite quotient of the profinite group $G/G^n$, so the norm group of the corresponding class field does not contain it. Conversely, every norm group under consideration contains $(C_K)^n$. These two inclusions prove the required intersection equality.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 3, printed p.404, PDF p.423]. The solution is independently derived; external inputs are distinguished from deductions specific to this exercise.
