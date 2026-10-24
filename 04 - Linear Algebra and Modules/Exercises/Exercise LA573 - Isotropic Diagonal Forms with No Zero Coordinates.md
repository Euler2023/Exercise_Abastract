---
title: 'Exercise LA573: Isotropic Diagonal Forms with No Zero Coordinates'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 4, printed p. 385, PDF p. 404
source_refs:
- S4/ch-VI/sec-4/ex-4
created: '2026-10-23'
---

# Exercise LA573: Isotropic Diagonal Forms with No Zero Coordinates

## Problem Statement

> [!question] Neukirch VI.4.4
> If a quadratic form $a_1x_1^2+\cdots+a_nx_n^2$ represents zero over a field $K$ with more than five elements (i.e., $a_1x_1^2+\cdots+a_nx_n^2=0$ has a nontrivial solution in $K$), then there is a representation of zero in which all $x_i\ne0$.
> **Printed hint:** If $a\xi^2=\lambda\ne0$, $b\ne0$, then there are non-zero elements $\alpha$ and $\beta$ such that $a\alpha^2+b\beta^2=\lambda$. To prove this, multiply the identity
> $$
> \frac{(t-1)^2}{(t+1)^2}+\frac{4t}{(t+1)^2}=1
> $$
> by $a\xi^2=\lambda$ and insert $t=b\gamma^2/a$, for some element $\gamma\ne0$ such that $t\ne\pm1$. Use this to prove the claim by induction.

> [!warning] Source issue / proof scope
> The printed field statement needs characteristic different from 2 and nonzero coefficients. Both missing hypotheses have explicit counterexamples below.

## Hints

> [!hint]- Hint
> Check characteristic and zero coefficients. In the valid case fill one zero coordinate at a time while keeping a chosen nonzero coordinate nonzero.

> [!hint]- Stronger hint
> For a nonzero coordinate xi, choose t=b gamma^2/a avoiding 0 and plus/minus 1, then replace xi and one zero coordinate by the two quantities in the solution.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Source issue.** The printed statement omits the necessary assumptions $\operatorname{char}K\ne2$ and $a_i\ne0$ for every coefficient. If zero coefficients are allowed, $q=x_1^2$ in two variables has a nontrivial zero but no zero with every coordinate nonzero. There is also a counterexample in characteristic $2$: over $K=\mathbb F_2(t)$, the form $q=x_1^2+t x_2^2+x_3^2$ has the zero $(1,0,1)$, but $q=0$ forces $x_2=0$, since otherwise $t=((x_1+x_3)/x_2)^2$, a contradiction.
> We prove the corrected version. Suppose a currently nonzero coordinate $\xi$ has coefficient $a\ne0$, and a zero coordinate to be filled has coefficient $b\ne0$. Set $t=b\gamma^2/a$ and take
> $$
> \alpha=\xi\frac{t-1}{t+1},\qquad
> \beta=\frac{2\xi\gamma}{t+1}.
> $$
> The identity in the statement gives $a\alpha^2+b\beta^2=a\xi^2$. It suffices to have $\gamma\ne0$ and $t\ne\pm1$ to make both coordinates nonzero. There are at most $1+2+2=5$ forbidden values of $\gamma$, so $|K|>5$ ensures that a choice exists.
> Starting from any nontrivial zero, apply this replacement to fill one zero coordinate at a time, leaving the other terms unchanged. After finitely many steps every coordinate is nonzero.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

The statement was checked against the original page image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 4, printed p.385, PDF p.404]. The solution is an independent derivation.
