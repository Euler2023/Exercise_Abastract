---
title: "Exercise F105: Transitivity of Maximal Archimedean Real Closed Fields"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - real-closed-fields
  - archimedean-subfields
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercises, Exercise 11, printed p. 463, PDF p. 478"
created: 2026-09-25
---

# Exercise F105: Transitivity of Maximal Archimedean Real Closed Fields

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 11
> Let $K\subset K_1\subset K_2$ be real closed fields. Suppose that $K$ is maximal archimedean in $K_1$ and $K_1$ is maximal archimedean in $K_2$. Show that $K$ is maximal archimedean in $K_2$.

## Hints

> [!hint]- Hint 1: Canonical residues
> By Exercises 6 and 7, if a real closed field $F$ is maximal archimedean in a real closed field $E$, then every element of $E$ finite over $F$ has residue in $F$.

> [!hint]- Hint 2: Approximate twice
> For an element $x\in K_2$ finite over $K$, first subtract its residue in $K_1$, then subtract that element's residue in $K$.

> [!hint]- Hint 3: Use reciprocals
> If an intermediate field is archimedean over $K$ and contains $x\ne b\in K$ with $x-b$ infinitesimal over $K$, what happens to $(x-b)^{-1}$?

## Solution

> [!success]- Solution
> For real closed fields $F\subseteq E$ with $F$ maximal archimedean in $E$, the canonical place of $E$ over $F$ has residue field exactly $F$. Indeed, Exercise 6 makes the residue field algebraic over $F$, Proposition 1.1 makes it real, and the real closed field $F$ has no proper real algebraic extension. Equivalently, every $x\in E$ finite over $F$ has a unique $a\in F$ such that $x-a$ is infinitesimal over $F$.
>
> Now take $x\in K_2$ finite over $K$. It is also finite over $K_1$. By the preceding observation for $K_1\subseteq K_2$, there is $a\in K_1$ with $\varepsilon=x-a$ infinitesimal over $K_1$. In particular $|\varepsilon|<1$. Since $|x|<c$ for some $c\in K_{>0}$, we have $|a|<c+1$; thus $a$ is finite over $K$. Apply the observation again to $K\subseteq K_1$: there is $b\in K$ with $a-b$ infinitesimal over $K$. The element $\varepsilon$ is infinitesimal over $K$ as well, so $x-b=(x-a)+(a-b)$ is infinitesimal over $K$.
>
> Suppose $E$ is an intermediate field $K\subseteq E\subseteq K_2$ that is archimedean over $K$. Every $x\in E$ is finite over $K$, so choose $b\in K$ as above. If $x\ne b$, then $x-b$ is a nonzero infinitesimal and $(x-b)^{-1}\in E$ is infinitely large over $K$, contradicting the assumption on $E$. Hence every $x\in E$ lies in $K$, so $E=K$. This is maximal archimedeanity of $K$ in $K_2$.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real Places and Archimedean Valuation Rings]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source and proof status:** [S2, Ch. XI, Exercise 11, printed p. 463, PDF p. 478]. The two-stage residue argument is independently derived. It invokes the independent result of Exercise 6 and Lang's proved Proposition 1.1 (printed p. 451 / PDF p. 466).
- **Boundary:** Real closedness of the intermediate fields identifies their real algebraic residue extensions with the base fields; the same argument needs additional care without that hypothesis.
