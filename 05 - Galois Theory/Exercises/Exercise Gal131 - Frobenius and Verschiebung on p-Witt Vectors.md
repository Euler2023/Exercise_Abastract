---
title: "Exercise Gal131: Frobenius and Verschiebung on p-Witt Vectors"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - witt-vectors
  - frobenius-endomorphism
  - verschiebung-operator
  - p-typical-witt-vectors
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 47, printed p. 331, PDF p. 346"
created: 2026-09-12
---

# Exercise Gal131: Frobenius and Verschiebung on p-Witt Vectors

## Problem Statement

> [!question]
> Let $p$ be a prime number, and consider the projection of $W(A)$ on vectors whose components are indexed by a power of $p$. Now use the log to the base $p$ to index these components, so that we write $x_n$ instead of $x_{p^n}$. For instance, $x_0$ now denotes what was $x_1$ previously. For a Witt vector $x = (x_0, x_1, \dots, x_n, \dots)$ define
> $$
> Vx = (0, x_0, x_1, \dots) \quad \text{and} \quad Fx = (x_0^p, x_1^p, \dots).
> $$
> Thus $V$ is a shifting operator. We have $V \circ F = F \circ V$. Show that
> $$
> (Vx)^{(n)} = p x^{(n-1)} \quad \text{and} \quad x^{(n)} = (Fx)^{(n-1)} + p^n x_n.
> $$
> Also from the definition, we have
> $$
> x^{(n)} = x_0^{p^n} + p x_1^{p^{n-1}} + \dots + p^n x_n.
> $$

## Hints

> [!hint]- Weak Hint
> Recall the formula for ghost components from Exercise 46 restricted to powers of $p$: the divisors of $p^n$ are $1, p, p^2, \dots, p^n$.

> [!hint]- Moderate Hint
> - Substitute $d = p^i$ into $\sum_{d \mid p^n} d x_d^{p^n / d}$ to get the sum from $i = 0$ to $n$.
> - For $Vx$, the 0-th component is 0, and the $i$-th component is $x_{i-1}$. Compute $(Vx)^{(n)}$ directly from the ghost component definition.

> [!hint]- Strong Hint
> Notice that for $Fx = (x_0^p, x_1^p, \dots)$, its $(n-1)$-th ghost component is:
> $$
> (Fx)^{(n-1)} = \sum_{i=0}^{n-1} p^i (x_i^p)^{p^{n-1-i}} = \sum_{i=0}^{n-1} p^i x_i^{p^{n-i}}.
> $$
> Compare this with the formula for $x^{(n)} = \sum_{i=0}^n p^i x_i^{p^{n-i}}$ and observe that the only missing term is the $i = n$ term, $p^n x_n$.

## Solution

> [!success]- Complete Derivation
> Let $p$ be a fixed prime number. Consider the ring of $p$-typical Witt vectors, whose components are indexed by $n \ge 0$, corresponding to the powers $p^n$ in the big Witt vector ring.
>
> ---
>
> ### 1. Ghost Components for $p$-Typical Witt Vectors
> In the big Witt vector ring (Exercise 46), the $m$-th ghost component is:
> $$
> x^{(m)} = \sum_{d \mid m} d x_d^{m/d}.
> $$
> Restricting to $m = p^n$, the positive divisors of $p^n$ are precisely
> $$
> d = p^i \quad \text{for } i = 0, 1, \dots, n.
> $$
> Under the logarithmic indexing convention $x_i = x_{p^i}$ (so $x_0 = x_{p^0} = x_1$), the ghost component $x^{(n)} = x^{(p^n)}$ becomes:
> $$
> x^{(n)} = \sum_{i=0}^n p^i x_i^{p^n / p^i} = \sum_{i=0}^n p^i x_i^{p^{n-i}} = x_0^{p^n} + p x_1^{p^{n-1}} + p^2 x_2^{p^{n-2}} + \dots + p^n x_n.
> $$
> This establishes the fundamental expression for the $n$-th ghost component of a $p$-typical Witt vector.
>
> ---
>
> ### 2. Commutativity of $V$ and $F$
> The operators $V$ (Verschiebung) and $F$ (Frobenius) are defined componentwise on $x = (x_0, x_1, x_2, \dots)$ by:
> $$
> Vx = (0, x_0, x_1, x_2, \dots),
> $$
> $$
> Fx = (x_0^p, x_1^p, x_2^p, \dots).
> $$
> We compute their compositions:
> $$
> (V \circ F)(x) = V(x_0^p, x_1^p, x_2^p, \dots) = (0, x_0^p, x_1^p, x_2^p, \dots),
> $$
> $$
> (F \circ V)(x) = F(0, x_0, x_1, x_2, \dots) = (0^p, x_0^p, x_1^p, x_2^p, \dots) = (0, x_0^p, x_1^p, x_2^p, \dots).
> $$
> Therefore:
> $$
> V \circ F = F \circ V.
> $$
>
> ---
>
> ### 3. Ghost Components of $Vx$
> For the shifted vector $y = Vx = (y_0, y_1, \dots)$ where $y_0 = 0$ and $y_j = x_{j-1}$ for $j \ge 1$:
> - For $n = 0$:
>   $$
>   (Vx)^{(0)} = y_0 = 0.
>   $$
> - For $n \ge 1$:
>   $$
>   (Vx)^{(n)} = \sum_{j=0}^n p^j y_j^{p^{n-j}} = p^0 \cdot 0^{p^n} + \sum_{j=1}^n p^j y_j^{p^{n-j}} = \sum_{j=1}^n p^j x_{j-1}^{p^{n-j}}.
>   $$
>   Set the index of summation to $i = j - 1$. As $j$ ranges from 1 to $n$, $i$ ranges from 0 to $n - 1$:
>   $$
>   (Vx)^{(n)} = \sum_{i=0}^{n-1} p^{i+1} x_i^{p^{n - (i+1)}} = p \sum_{i=0}^{n-1} p^i x_i^{p^{(n-1) - i}}.
>   $$
>   Recognizing the inner sum as the $(n-1)$-th ghost component $x^{(n-1)}$:
>   $$
>   (Vx)^{(n)} = p x^{(n-1)}.
>   $$
>
> ---
>
> ### 4. Relation Between $x^{(n)}$ and $(Fx)^{(n-1)}$
> Consider the vector $z = Fx = (x_0^p, x_1^p, \dots)$.
> Its components are $z_i = x_i^p$.
> For $n \ge 1$, we evaluate its $(n-1)$-th ghost component:
> $$
> (Fx)^{(n-1)} = \sum_{i=0}^{n-1} p^i z_i^{p^{(n-1)-i}} = \sum_{i=0}^{n-1} p^i (x_i^p)^{p^{n-1-i}} = \sum_{i=0}^{n-1} p^i x_i^{p^{n-i}}.
> $$
> Now compare this expression with $x^{(n)}$:
> $$
> x^{(n)} = \sum_{i=0}^n p^i x_i^{p^{n-i}} = \left( \sum_{i=0}^{n-1} p^i x_i^{p^{n-i}} \right) + p^n x_n^{p^0} = (Fx)^{(n-1)} + p^n x_n.
> $$
>
> This proves both identities:
> $$
> (Vx)^{(n)} = p x^{(n-1)} \quad \text{and} \quad x^{(n)} = (Fx)^{(n-1)} + p^n x_n.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- In characteristic $p$, the identity $x^{(n)} = (Fx)^{(n-1)} + p^n x_n$ modulo $p$ reduces to $x^{(n)} \equiv (Fx)^{(n-1)} \equiv x_0^{p^n} \pmod p$, reflecting the compatibility of the Frobenius endomorphism with the residue field.
- The operators $F$ and $V$ satisfy the fundamental relation $F \circ V = V \circ F = p \cdot \operatorname{id}$ on $W(A)$. When $A$ has characteristic $p$, $F$ is a ring endomorphism and $V$ is an additive endomorphism satisfying the projection formula $x V(y) = V(F(x)y)$.
