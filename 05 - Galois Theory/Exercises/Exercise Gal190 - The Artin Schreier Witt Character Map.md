---
title: 'Exercise Gal190: The Artin Schreier Witt Character Map'
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 4, printed p. 340, PDF p. 359
source_refs:
- S4/ch-V/sec-3/ex-4
created: '2026-10-23'
---

# Exercise Gal190: The Artin Schreier Witt Character Map

## Problem Statement

> [!question] Neukirch V.3.4
> Abstract Kummer theory (chap. IV, (3.3)) yields for the maximal abelian extension $L/K$ of exponent $n$ a surjective homomorphism
> $$
> W_n(K)\longrightarrow\operatorname{Hom}(G(L/K),W_n(\mathbb F_p)),\qquad x\longmapsto\chi_x,
> $$
> where one has $\chi_x(\sigma)=\sigma\xi-\xi$ for all $\sigma\in G(L/K)$, with an arbitrary $\xi\in W_n(L)$ such that $\wp\xi=x$. Show that $x\mapsto\chi_x$ has kernel $\wp W_n(K)$.

> [!warning] Source issue or convention
> The printed statement says “extension ... of exponent $n$.” For Witt vectors of length $n$ the constant kernel has order and exponent $p^n$, so the intended extension is the maximal abelian extension of exponent dividing $p^n$. For example $n=1$ as printed would make $L=K$, although Artin–Schreier equations can define nontrivial cyclic degree-$p$ extensions. Use exponent $p^n$ for this and the following exercise.

## Hints

> [!hint]- Hint 1
> The extension exponent compatible with length-$n$ Witt vectors is $p^n$.

> [!hint]- Hint 2
> If $\chi_x=0$, a chosen solution $\xi$ is fixed by every element of the Galois group.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Use the corrected extension of exponent dividing $p^n$, as explained in the source warning. The equations $\wp\xi=x$ can be solved recursively in $\overline K$: the first is $\xi_0^p-\xi_0=x_0$, and each later equation is $\xi_i^p-\xi_i=x_i+$ an expression in previously chosen coordinates. Each polynomial has derivative $-1$, so its roots belong to the separable closure. If $\xi$ is a solution, every conjugate differs from it by an element of $W_n(\mathbb F_p)$, by Exercise 3. Its splitting field is therefore abelian of exponent dividing $p^n$ and lies in $L$.
>
> Replacing $\xi$ by another solution adds a Frobenius-fixed vector, which is fixed by $G_K$; thus the character is independent of the choice. For $\sigma,\tau$,
> $$
> \chi_x(\sigma\tau)=\sigma(\tau\xi-\xi)+(\sigma\xi-\xi)=\chi_x(\tau)+\chi_x(\sigma),
> $$
> since the first difference lies in the constant group $W_n(\mathbb F_p)$. Additivity in $x$ follows by using the solution $\xi+\eta$ for $x+y$.
>
> If $x=\wp\eta$ with $\eta\in W_n(K)$, choose that solution: every difference is zero, so $\chi_x=0$. Conversely, if $\chi_x=0$, every $\sigma\in G(L/K)$ fixes $\xi$. Coordinatewise fixed-field theory gives $\xi\in W_n(K)$, and therefore $x=\wp\xi\in\wp W_n(K)$. This proves the required kernel equality. The surjectivity stated in the exercise is the abstract Kummer theorem applied to the exact operator sequence with kernel $W_n(\mathbb F_p)\cong\mathbb Z/p^n\mathbb Z$ and additive Hilbert 90 for Witt vectors (IV §3 Exercises 2–3).

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Artin-Schreier Extensions|Artin-Schreier extensions]]
- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt vectors and Artin-Schreier-Witt theory]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 4, printed p. 340, PDF p. 359]. Independent derivation of the requested kernel equality. The printed exponent is preserved and corrected visibly. The stated Kummer-theory surjectivity is an explicitly named source input.
