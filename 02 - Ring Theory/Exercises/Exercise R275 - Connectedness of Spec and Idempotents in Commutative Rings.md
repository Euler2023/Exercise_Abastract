---
title: "Exercise R275: Connectedness of Spec and Idempotents in Commutative Rings"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - commutative-algebra
  - spec-of-a-ring
  - idempotents
  - connected-space
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises, Exercise 14, printed p. 411, PDF p. 426"
created: 2026-09-15
---

# Exercise R275: Connectedness of Spec and Idempotents in Commutative Rings

## Problem Statement

> [!question]
> Let $A$ be a commutative ring. Define $\operatorname{spec}(A)$ to be **connected** if $\operatorname{spec}(A)$ is not the union of two disjoint non-empty closed sets (or equivalently, $\operatorname{spec}(A)$ is not the union of two disjoint, non-empty open sets).
> 
> **(a)** Suppose that there are idempotents $e_1, e_2$ in $A$ (that is $e_1^2 = e_1$ and $e_2^2 = e_2$), $\neq 0, 1$, such that $e_1 e_2 = 0$ and $e_1 + e_2 = 1$. Show that $\operatorname{spec}(A)$ is not connected.
> 
> **(b)** Conversely, if $\operatorname{spec}(A)$ is not connected, show that there exist idempotents as in part (a).
> 
> In either case, the existence of the idempotents is equivalent with the fact that the ring $A$ is a product of two non-zero rings, $A = A_1 \times A_2$.

## Hints

> [!hint]- Hint 1
> For part (a), for any prime ideal $\mathfrak{p} \in \operatorname{spec}(A)$, since $e_1 e_2 = 0 \in \mathfrak{p}$, at least one of $e_1, e_2$ lies in $\mathfrak{p}$.
> Since $e_1 + e_2 = 1 \notin \mathfrak{p}$, can both lie in $\mathfrak{p}$?
> Consider the closed sets $V(e_1)$ and $V(e_2)$. Are they disjoint? What is their union?

> [!hint]- Hint 2
> For part (b), suppose $\operatorname{spec}(A) = V(\mathfrak{a}) \cup V(\mathfrak{b})$ with $V(\mathfrak{a}) \cap V(\mathfrak{b}) = \varnothing$ and both non-empty.
> Then $V(\mathfrak{a} + \mathfrak{b}) = \varnothing \implies \mathfrak{a} + \mathfrak{b} = A$.
> Write $1 = x + y$ with $x \in \mathfrak{a}, y \in \mathfrak{b}$.
> Also $V(\mathfrak{a} \mathfrak{b}) = \operatorname{spec}(A) \implies \mathfrak{a} \mathfrak{b} \subseteq \operatorname{nil}(A)$, so $(xy)^N = 0$ for some $N$.
> How can you construct an idempotent from $x$ and $y$ using the binomial expansion of $(x + y)^{2N} = 1$?

## Solution

> [!success]- Solution
> Let $A$ be a commutative ring with identity $1$.
> The spectrum $X = \operatorname{spec}(A)$ is the set of all prime ideals of $A$, equipped with the Zariski topology where closed sets are of the form
> $$
> V(\mathfrak{a}) = \{\mathfrak{p} \in \operatorname{spec}(A) : \mathfrak{a} \subseteq \mathfrak{p}\}.
> $$
> A topological space is connected if it cannot be partitioned into two disjoint, non-empty closed subsets (or equivalently, two disjoint, non-empty open subsets).
> 
> ### Part (a): Idempotents $\implies \operatorname{spec}(A)$ is not Connected
> 
> Suppose there exist elements $e_1, e_2 \in A$ such that
> $$
> e_1^2 = e_1, \quad e_2^2 = e_2, \quad e_1, e_2 \notin \{0, 1\}, \quad e_1 e_2 = 0, \quad e_1 + e_2 = 1.
> $$
> 
> Consider the closed sets:
> $$
> Y_1 = V(e_1) = \{\mathfrak{p} \in \operatorname{spec}(A) : e_1 \in \mathfrak{p}\}, \qquad Y_2 = V(e_2) = \{\mathfrak{p} \in \operatorname{spec}(A) : e_2 \in \mathfrak{p}\}.
> $$
> 
> 1. **Disjointness:**
>    The intersection of the closed sets is
>    $$
>    Y_1 \cap Y_2 = V(e_1) \cap V(e_2) = V(e_1, e_2) = V((e_1) + (e_2)).
>    $$
>    Since $e_1 + e_2 = 1$, the ideal $(e_1, e_2)$ contains $1$, so $(e_1, e_2) = A$.
>    Since no prime ideal contains $1$, we have:
>    $$
>    Y_1 \cap Y_2 = V(A) = \varnothing.
>    $$
> 
> 2. **Union is the Entire Space:**
>    The union of the closed sets is
>    $$
>    Y_1 \cup Y_2 = V(e_1) \cup V(e_2) = V(e_1 e_2).
>    $$
>    Since $e_1 e_2 = 0$, we have $V(0) = \operatorname{spec}(A)$.
>    Thus,
>    $$
>    Y_1 \cup Y_2 = \operatorname{spec}(A).
>    $$
> 
> 3. **Non-emptiness:**
>    Suppose $Y_1 = \varnothing$.
>    Then $V(e_1)=\varnothing$, so $(e_1)=A$: otherwise a maximal ideal containing $(e_1)$ would give a point of $V(e_1)$. Choose $a\in A$ with $ae_1=1$.
>    Using $e_1^2=e_1$, we obtain $e_1=(ae_1)e_1=ae_1^2=ae_1=1$, contradicting $e_1\ne1$.
>    Similarly, if $Y_2 = \varnothing$, then $e_2 = 1$, so $e_1 = 1 - e_2 = 0$, contradicting $e_1 \neq 0$.
>    Therefore, both $Y_1$ and $Y_2$ are non-empty.
> 
> Since $\operatorname{spec}(A) = Y_1 \cup Y_2$ with $Y_1, Y_2$ disjoint, non-empty closed sets, $\operatorname{spec}(A)$ is **not connected**.
> 
> ### Part (b): $\operatorname{spec}(A)$ not Connected $\implies$ Idempotents Exist
> 
> Suppose $\operatorname{spec}(A)$ is disconnected.
> Then there exist non-empty closed subsets $Y_1, Y_2 \subset \operatorname{spec}(A)$ such that
> $$
> \operatorname{spec}(A) = Y_1 \cup Y_2, \qquad Y_1 \cap Y_2 = \varnothing.
> $$
> Since $Y_1$ and $Y_2$ are closed, there exist ideals $\mathfrak{a}, \mathfrak{b} \subseteq A$ such that $Y_1 = V(\mathfrak{a})$ and $Y_2 = V(\mathfrak{b})$.
> 
> 1. **Disjointness condition:**
>    $$
>    V(\mathfrak{a} + \mathfrak{b}) = V(\mathfrak{a}) \cap V(\mathfrak{b}) = \varnothing \implies \sqrt{\mathfrak{a} + \mathfrak{b}} = A \implies \mathfrak{a} + \mathfrak{b} = A.
>    $$
>    Therefore, there exist elements $x \in \mathfrak{a}$ and $y \in \mathfrak{b}$ such that
>    $$
>    x + y = 1.
>    $$
> 
> 2. **Union condition:**
>    $$
>    V(\mathfrak{a} \cap \mathfrak{b}) = V(\mathfrak{a}) \cup V(\mathfrak{b}) = \operatorname{spec}(A) \implies \mathfrak{a} \cap \mathfrak{b} \subseteq \operatorname{nil}(A).
>    $$
>    Since $x \in \mathfrak{a}$ and $y \in \mathfrak{b}$, we have $xy \in \mathfrak{a} \cap \mathfrak{b} \subseteq \operatorname{nil}(A)$.
>    Thus, $xy$ is a nilpotent element: there exists an integer $N \ge 1$ such that
>    $$
>    (xy)^N = 0.
>    $$
> 
> 3. **Lifting to Idempotents:**
>    In the equation $x + y = 1$, raise both sides to the power $2N$:
>    $$
>    1 = (x + y)^{2N} = \sum_{k=0}^{2N} \binom{2N}{k} x^k y^{2N - k}.
>    $$
>    Split this sum into two parts:
>    $$
>    e_2 = \sum_{k=0}^{N-1} \binom{2N}{k} x^k y^{2N - k}, \qquad e_1 = \sum_{k=N}^{2N} \binom{2N}{k} x^k y^{2N - k}.
>    $$
>    By construction:
>    - $e_1 + e_2 = 1$.
>    - In each term of $e_1$, the power of $x$ is $k \ge N$, so $x^N \mid e_1$. Since $x \in \mathfrak{a}$, $e_1 \in \mathfrak{a}^N \subseteq \mathfrak{a}$.
>    - In each term of $e_2$, the power of $y$ is $2N - k \ge N + 1 \ge N$, so $y^N \mid e_2$. Since $y \in \mathfrak{b}$, $e_2 \in \mathfrak{b}^N \subseteq \mathfrak{b}$.
>    - Their product: $e_1 e_2$ is a sum of terms of the form $c_{k, l} x^{k+l} y^{4N - (k+l)}$ where $k \ge N$ and $2N - l \ge N$.
>      In every term, the power of $x$ is at least $N$ and the power of $y$ is at least $N$.
>      Thus $(xy)^N \mid e_1 e_2$.
>      Since $(xy)^N = 0$, we have:
>      $$
>      e_1 e_2 = 0.
>      $$
>    - Since $e_1 + e_2 = 1$ and $e_1 e_2 = 0$, multiplying by $e_1$ gives:
>      $$
>      e_1^2 + e_1 e_2 = e_1 \implies e_1^2 + 0 = e_1 \implies e_1^2 = e_1.
>      $$
>      Similarly, $e_2^2 = e_2$.
> 
> 4. **Non-triviality of $e_1, e_2$:**
>    If $e_1 = 0$, then $1 = e_2 \in \mathfrak{b}$, which would mean $V(\mathfrak{b}) = \varnothing$, contradicting that $Y_2$ is non-empty.
>    If $e_1 = 1$, then $e_2 = 0 \in \mathfrak{a}$, so $1 = e_1 \in \mathfrak{a}$, which would mean $Y_1 = \varnothing$, contradicting that $Y_1$ is non-empty.
>    Therefore, $e_1, e_2 \notin \{0, 1\}$.
> 
> Thus, $e_1$ and $e_2$ are non-trivial orthogonal idempotents summing to $1$.
> 
> ### Equivalence with the Product of Two Rings
> 
> - If $e_1, e_2$ are orthogonal idempotents with $e_1 + e_2 = 1$ and $e_1, e_2 \neq 0$, define
>   $$
>   A_1 = A e_1, \qquad A_2 = A e_2.
>   $$
>   Each $A_i$ is a commutative ring with identity element $e_i \neq 0$ (hence $A_i$ is non-zero).
>   The map
>   $$
>   \psi: A \to A_1 \times A_2, \qquad a \mapsto (a e_1, a e_2)
>   $$
>   is a ring isomorphism:
>   - Injective: if $a e_1 = 0$ and $a e_2 = 0$, then $a = a(e_1 + e_2) = a e_1 + a e_2 = 0$.
>   - Surjective: for any $(x e_1, y e_2) \in A_1 \times A_2$, the element $a = x e_1 + y e_2 \in A$ satisfies $a e_1 = x e_1^2 + y e_1 e_2 = x e_1$ and $a e_2 = y e_2$.
> - Conversely, if $A \cong A_1 \times A_2$ with $A_1, A_2 \neq 0$, the elements $e_1 = (1, 0)$ and $e_2 = (0, 1)$ are non-trivial orthogonal idempotents in $A$ summing to $1$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness and Connected Components]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]]
- [[08 - Arithmetic Geometry/Concepts/Schemes|Schemes]]

## Notes

- **Independent derivation:** The proof uses the classical binomial idempotent lifting formula $e_1 = \sum_{k=N}^{2N} \binom{2N}{k} x^k y^{2N-k}$ to produce exact idempotents from nilpotents.
- **Topological corollary:** This establishes the fundamental theorem of scheme theory: an affine scheme $\operatorname{Spec}(A)$ is connected if and only if $A$ contains no idempotents other than $0$ and $1$.
