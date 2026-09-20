---
title: "Exercise F91: The Generic Primitive Element for Finite Separable Extensions"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - separable-extensions
  - primitive-element-theorem
  - transcendence-basis
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, printed p. 374, PDF p. 389, Exercise 5"
created: 2026-09-15
---

# Exercise F91: The Generic Primitive Element for Finite Separable Extensions

## Problem Statement

> [!question]
> Let $k$ be a field and $k(x_1, \ldots, x_n) = k(x)$ a finite separable extension. Let $u_1, \ldots, u_n$ be algebraically independent over $k$. Let
> $$
> w = u_1 x_1 + \cdots + u_n x_n.
> $$
> Let $k_u = k(u_1, \ldots, u_n)$. Show that $k_u(w) = k_u(x)$.

## Hints

> [!hint]- Hint 1: Embeddings into an algebraic closure
> Since $k(x)/k$ is finite and separable, let $d = [k(x) : k]$. How many distinct $k$-embeddings $\sigma_1, \ldots, \sigma_d: k(x) \to \overline{k}$ exist? Let $\sigma_1 = \operatorname{id}$.

> [!hint]- Hint 2: Action on the generic element $w$
> Extend these embeddings to $k_u(x)$ by fixing each $u_j$. What is $\sigma_i(w)$? Under what condition could $\sigma_1(w) = \sigma_i(w)$?

> [!hint]- Hint 3: Algebraic independence of the $u_j$
> The difference $\sigma_1(w) - \sigma_i(w) = \sum_{j=1}^n u_j (x_j - \sigma_i(x_j))$ is a linear polynomial in $u_1, \ldots, u_n$. Since $u_1, \ldots, u_n$ are algebraically independent over the algebraic closure, can this linear combination vanish if not all coefficients are zero?

## Solution

> [!success]-
> ### Step 1: Degree of the extension and embeddings
> 
> Let $k(x) = k(x_1, \ldots, x_n)$ be a finite separable extension of $k$, with degree
> $$
> d = [k(x) : k].
> $$
> Because $k(x)/k$ is separable, there are exactly $d$ distinct $k$-embeddings of $k(x)$ into an algebraic closure $\overline{k}$.
> Enumerate them as $\sigma_1, \sigma_2, \ldots, \sigma_d$, with $\sigma_1 = \operatorname{id}_{k(x)}$.
> 
> Let $u_1, \ldots, u_n$ be algebraically independent over $k$, and let $k_u = k(u_1, \ldots, u_n)$.
> Since $u_1, \ldots, u_n$ are purely transcendental over $k$ and $k(x)$ is algebraic over $k$, the elements $u_1, \ldots, u_n$ remain algebraically independent over $k(x)$ (and over its Galois closure).
> Thus $k_u$ and $k(x)$ are linearly disjoint over $k$, and
> $$
> [k_u(x) : k_u] = [k(x) : k] = d.
> $$
> 
> Each embedding $\sigma_i: k(x) \to \overline{k}$ extends uniquely to a $k_u$-embedding
> $$
> \tilde{\sigma}_i: k_u(x) \to \overline{k}(u_1, \ldots, u_n)
> $$
> defined by fixing each transcendental variable $u_j$:
> $$
> \tilde{\sigma}_i\left(\sum a_j(u) \theta_j\right) = \sum a_j(u) \sigma_i(\theta_j) \quad \text{for } \theta_j \in k(x).
> $$
> These $\tilde{\sigma}_1, \ldots, \tilde{\sigma}_d$ are $d$ pairwise distinct $k_u$-embeddings of $k_u(x)$.
> 
> ### Step 2: Conjugates of the linear combination $w$
> 
> Consider the element
> $$
> w = \sum_{j=1}^n u_j x_j \in k_u(x).
> $$
> Applying the embedding $\tilde{\sigma}_i$ to $w$:
> $$
> \tilde{\sigma}_i(w) = \sum_{j=1}^n u_j \sigma_i(x_j).
> $$
> Now consider the difference between the identity embedding and $\tilde{\sigma}_i$ for any $i \in \{2, \ldots, d\}$:
> $$
> \tilde{\sigma}_1(w) - \tilde{\sigma}_i(w) = \sum_{j=1}^n u_j \big(x_j - \sigma_i(x_j)\big).
> $$
> 
> ### Step 3: Non-vanishing of the difference
> 
> Since $i \neq 1$, the embedding $\sigma_i$ is distinct from $\sigma_1 = \operatorname{id}$ on $k(x) = k(x_1, \ldots, x_n)$.
> Therefore, $\sigma_i$ cannot fix all generators $x_1, \ldots, x_n$.
> There must exist at least one index $j_0 \in \{1, \ldots, n\}$ such that
> $$
> x_{j_0} - \sigma_i(x_{j_0}) \neq 0.
> $$
> 
> The expression $\sum_{j=1}^n u_j (x_j - \sigma_i(x_j))$ is a linear form in the variables $u_1, \ldots, u_n$ with coefficients in $\overline{k}$.
> Since the coefficient of $u_{j_0}$ is nonzero, this linear form is a **nonzero polynomial** in $u_1, \ldots, u_n$.
> 
> Since $u_1, \ldots, u_n$ are algebraically independent over $\overline{k}$ (as they are algebraically independent over $k$ and $\overline{k}$ is algebraic over $k$), a nonzero polynomial in $u_1, \ldots, u_n$ cannot vanish at $(u_1, \ldots, u_n)$!
> Therefore:
> $$
> \tilde{\sigma}_1(w) - \tilde{\sigma}_i(w) \neq 0 \implies \tilde{\sigma}_1(w) \neq \tilde{\sigma}_i(w) \quad \text{for all } i \in \{2, \ldots, d\}.
> $$
> 
> By the same reasoning, for any two distinct indices $i \neq l$,
> $$
> \tilde{\sigma}_i(w) - \tilde{\sigma}_l(w) = \sum_{j=1}^n u_j \big(\sigma_i(x_j) - \sigma_l(x_j)\big) \neq 0,
> $$
> because $\sigma_i \neq \sigma_l$ implies $\sigma_i(x_j) \neq \sigma_l(x_j)$ for some $j$.
> 
> Thus, the $d$ conjugates $\tilde{\sigma}_1(w), \tilde{\sigma}_2(w), \ldots, \tilde{\sigma}_d(w)$ of $w$ are **all distinct**.
> 
> ### Step 4: Dimension and conclusion
> 
> Let $g(T)\in k_u[T]$ be the minimal polynomial of $w$. Each of the $d$ distinct values $\tilde{\sigma}_i(w)$ is a root of $g$, so $\deg g\ge d$. On the other hand, $w\in k_u(x)$ and $[k_u(x):k_u]=d$, so $\deg g\le d$. Thus $\deg g=d$ (and consequently $g$ is the product of the displayed distinct linear factors).
> Therefore:
> $$
> [k_u(w) : k_u] = \deg g(T) = d.
> $$
> 
> On the other hand, $w \in k_u(x)$, so we have the field inclusions:
> $$
> k_u \subset k_u(w) \subset k_u(x).
> $$
> By the tower law:
> $$
> [k_u(x) : k_u] = [k_u(x) : k_u(w)] \cdot [k_u(w) : k_u].
> $$
> Substituting the degrees $d = [k_u(x) : k_u(w)] \cdot d$, we obtain:
> $$
> [k_u(x) : k_u(w)] = 1.
> $$
> This proves:
> $$
> k_u(w) = k_u(x).
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Source and proof status**: [S2, Ch. VIII, Exercise 5, printed p. 374, PDF p. 389]. The embedding-count argument is independently derived. It uses the standard equivalence between degree and number of embeddings for a finite separable extension, and linear disjointness under pure transcendental base change.
- **Generic primitive element**: The element $\sum_j u_jx_j$ generates the extension over $k_u$ for every base field $k$, including finite fields. The transcendental coefficients ensure that different embeddings have distinct values on this element.
