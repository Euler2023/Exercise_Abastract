---
title: Transcendence Bases and Transcendence Degree
aliases:
  - Transcendence Basis
  - Transcendence Degree
  - Purely Transcendental Extension
  - Separating Transcendence Basis
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, §1, printed pp. 355-357, PDF pp. 370-372"
source_status: verified
status: not-started
created: 2026-09-15
---

# Transcendence Bases and Transcendence Degree

## Definition

> [!info] Algebraic independence and transcendence basis
> Let $K/k$ be a field extension.
> 1. A subset $S \subset K$ is **algebraically independent over $k$** if for every finite distinct sequence $x_1, \ldots, x_n \in S$ and every nonzero polynomial $f(X_1, \ldots, X_n) \in k[X_1, \ldots, X_n]$, we have $f(x_1, \ldots, x_n) \neq 0$.
> 2. A subset $B \subset K$ is a **transcendence base** (or **transcendence basis**) of $K/k$ if $B$ is algebraically independent over $k$, and $K$ is algebraic over the purely transcendental subfield $k(B)$.
> 3. Equivalently, by Zorn's Lemma, a transcendence base is a maximal algebraically independent subset of $K$ over $k$.
> 4. The cardinality $|B|$ depends only on the extension $K/k$ and is called the **transcendence degree** of $K$ over $k$, denoted $\operatorname{tr.deg}(K/k)$ or $\operatorname{tr.deg}_k K$.

## Intuition and Steinitz Exchange

A transcendence base plays for general field extensions the exact analogue of a vector space basis in linear algebra.
The purely transcendental subfield $k(B)$ behaves like a rational function field in $|B|$ variables, and $K$ is obtained from it by a purely algebraic extension.

The invariance of the cardinality $|B|$ rests on the **Steinitz Exchange Lemma**:
If $S$ is algebraically independent over $k$ and $K$ is algebraic over $k(T)$, then there exists a subset $T' \subset T$ such that $S \cup T'$ is a transcendence base of $K/k$, and in particular $|S| \le |T|$.

## Key Properties

1. **Existence**: Every field extension $K/k$ possesses a transcendence base. Moreover, any algebraically independent subset can be completed to a transcendence base, and any generating set contains a transcendence base.
2. **Additivity in Towers**: If $k \subset E \subset K$ is a tower of field extensions, then
   $$
   \operatorname{tr.deg}(K/k) = \operatorname{tr.deg}(K/E) + \operatorname{tr.deg}(E/k).
   $$
   Furthermore, if $B_1$ is a transcendence base of $E/k$ and $B_2$ is a transcendence base of $K/E$, then $B_1 \cap B_2 = \emptyset$ and $B_1 \cup B_2$ is a transcendence base of $K/k$.
3. **Purely Transcendental Extensions**: An extension $K/k$ is called *purely transcendental* if $K = k(B)$ for some transcendence base $B$.
4. **Separating Transcendence Bases**: For a finitely generated extension $E/k$, a transcendence basis $B$ is **separating** when $E/k(B)$ is finite separable. A general extension $K/k$ is *separable* in Lang's sense if every finitely generated intermediate extension $E/k$ admits such a basis. The finite extension in this condition is $E/k(B)$, not necessarily $K/k(B)$. In characteristic zero every extension is separable; a finitely generated extension of a perfect field admits a separating transcendence basis.
5. **Relatively Algebraically Closed Subfields**: A subfield $k \subset K$ is *algebraically closed in $K$* if every element of $K$ algebraic over $k$ lies in $k$. If $K$ is a function field over $k$, $k$ is often chosen to be algebraically closed in $K$.

## Examples

> [!example] Rational function field
> Let $K = k(t_1, \ldots, t_n)$ be the field of rational functions in $n$ variables over $k$. Then $\{t_1, \ldots, t_n\}$ is a transcendence base, and $\operatorname{tr.deg}(K/k) = n$.

> [!example] Complex numbers over the rationals
> The field of complex numbers $\mathbb C$ has transcendence degree over $\mathbb Q$ equal to the cardinality of the continuum $\mathfrak c = 2^{\aleph_0}$. Since $\mathbb C$ is algebraically closed, $\mathbb C$ is isomorphic to the algebraic closure of $\mathbb Q(B)$ when $B$ is a set of $\mathfrak c$ algebraically independent indeterminates over $\mathbb Q$.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Purely Inseparable Extensions|Purely Inseparable Extensions]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Definitions and Steinitz exchange theorems are proved in [S2, Ch. VIII, §1, printed pp. 355–357, PDF pp. 370–372].
- The theory of separating transcendence bases is proved in [S2, Ch. VIII, §4, printed pp. 363–368, PDF pp. 378–383].
- The tower-of-bases argument is independently proved in [[03 - Field Theory/Exercises/Exercise F89 - Additivity of Transcendence Degree and Tower of Bases|Exercise F89]]. The cardinality calculation for the complex numbers is independently proved in [[03 - Field Theory/Exercises/Exercise F87 - Transcendence Bases and Automorphisms of the Complex Numbers|Exercise F87]]. These are exercise solutions, not proofs supplied by the exercise statements in Lang.
