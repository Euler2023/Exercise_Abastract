---
title: 'Exercise AG53: Principal Ideles in the Mixed Unit Parametrization'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 6, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-6
created: '2026-10-23'
---

# Exercise AG53: Principal Ideles in the Mixed Unit Parametrization

## Problem Statement

> [!question] Neukirch VI.1.6
> Let $\mathfrak p_1,\ldots,\mathfrak p_s$ be the complex primes of $K$. For $y\in\mathbb R$, let $\phi_k(y)$ be the idèle having component $e^{2\pi iy}$ at $\mathfrak p_k$, and components $1$ at all other places. Let $\epsilon_1,\ldots,\epsilon_t$ be a $\mathbb Z$-basis of the group of totally positive units of $K$.
> (i) The idèles of the form
> $$
> \alpha=\epsilon_1^{\lambda_1}\cdots\epsilon_t^{\lambda_t}\phi_1(y_1)\cdots\phi_s(y_s),\qquad\lambda_i\in\widehat{\mathbb Z}\times\mathbb R,\quad y_j\in\mathbb R,
> $$
> form a group, and have absolute norm $\mathfrak N(\alpha)=1$.
> (ii) $\alpha$ is a principal ideal if and only if $\lambda_i\in\mathbb Z\subseteq\widehat{\mathbb Z}\times\mathbb R$ and $y_j\in\mathbb Z\subseteq\mathbb R$.

> [!warning] Source issue / Free basis and principal idèles
> For a totally imaginary number field, the “group of totally positive units” contains all roots of unity and generally has no literal $\mathbb Z$-basis; in this exercise and Exercises 7–10, choose lifts of a free basis modulo its finite torsion subgroup. In (ii), “principal ideal” should read “principal idèle” in this idèle parametrization. The original statement is retained above; below we prove this corrected version in full.

## Hints

> [!hint]- Hint 1 — first step
> Write each mixed parameter as $\lambda_i=(x_i,t_i)$ and compare the finite components of a principal idèle first.

> [!hint]- Hint 2 — proof route
> Use finite components first, logarithms of absolute values second, and complex phases last. Separate roots of unity if the field has no real embeddings.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Clarification of notation.** If $K$ is totally imaginary, the group of totally positive units contains roots of unity and is not free; “$\mathbb Z$-basis” must mean a choice of lifts of a basis for the free quotient by its finite torsion subgroup. If there is a real embedding, the only totally positive root of unity is $1$.
> (i) Each parameter direction is a continuous homomorphism, so these idèles form a subgroup. The unit parameters have norm $1$ by the preceding exercise, and $\phi_k(y)$ also has absolute value $1$, so their product has norm $1$.
> (ii) If all parameters are diagonal integers and all $y_j$ are integers, then $\alpha=\prod_i\epsilon_i^{n_i}$ is principal. Conversely, suppose that $\alpha$ is principal, corresponding to $a\in K^\times$. Its finite components are units and its real components are positive, so $a$ is a totally positive unit. Write it as $\zeta\prod_i\epsilon_i^{n_i}$, where $\zeta$ is a root of unity. Put $\lambda_i=(x_i,t_i)$. The finite components give $\prod_i\epsilon_i^{x_i-n_i}=\zeta$. If $\zeta$ has order $w$, raise this equality to the $w$th power and use the profinite independence from the preceding exercise to obtain $w(x_i-n_i)=0$. Thus $x_i=n_i$, and then $\zeta=1$.
> Comparing the absolute values of the infinite components gives
> $$
> \sum_i(t_i-n_i)(\log|\epsilon_i|_v)_{v\mid\infty}=0.
> $$
> The linear independence of the logarithmic vectors in Dirichlet’s unit theorem forces $t_i=n_i$. After removing these unit factors, each complex component is $e^{2\pi iy_j}=1$, so $y_j\in\mathbb Z$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]

## Notes

The statement was checked against the original book at 200 dpi. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 6, printed p. 367, PDF p. 386]. The solution is an independent derivation in this vault; citing its inputs does not mean that the book solves this exercise. In the idèle setting, “principal ideal” in (ii) is interpreted as “principal idèle.” For totally imaginary fields, roots of unity must be separated explicitly as in the solution.
