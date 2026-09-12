---
title: "Exercise Gal132: Structure of the Ring of Witt Vectors over Fields of Characteristic p"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - witt-vectors
  - units
  - teichmuller-representatives
  - discrete-valuation-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 48, printed p. 331, PDF p. 346"
created: 2026-09-12
---

# Exercise Gal132: Structure of the Ring of Witt Vectors over Fields of Characteristic p

## Problem Statement

> [!question]
> Let $k$ be a field of characteristic $p$, and consider $W(k)$. Then $V$ is an additive endomorphism of $W(k)$, and $F$ is a ring homomorphism of $W(k)$ into itself. Furthermore, if $x \in W(k)$ then
> $$
> px = VFx.
> $$
> If $x, y \in W(k)$, then $(V^i x)(V^j y) = V^{i+j}(F^j x \cdot F^i y)$. For $a \in k$ denote by $\{a\}$ the Witt vector $(a, 0, 0, \dots)$. Then we can write symbolically
> $$
> x = \sum_{i=0}^\infty V^i \{x_i\}.
> $$
> Show that if $x \in W(k)$ and $x_0 \ne 0$ then $x$ is a unit in $W(k)$.
> 
> *Hint:* One has
> $$
> 1 - x \{x_0^{-1}\} = Vy
> $$
> and then
> $$
> x \{x_0^{-1}\} \sum_{i=0}^\infty (Vy)^i = (1 - Vy) \sum_{i=0}^\infty (Vy)^i = 1.
> $$

## Hints

> [!hint]- Weak Hint
> Recall the geometric series identity $\frac{1}{1 - u} = \sum_{i=0}^\infty u^i$. In a complete topological ring, this series converges if $u$ is topologically nilpotent.

> [!hint]- Moderate Hint
> - The vector $\{a\} = (a, 0, 0, \dots)$ is called the Teichmüller representative of $a$. Check that $\{a\} \cdot \{b\} = \{ab\}$.
> - If $x_0 \ne 0$, compute the first component of $x \{x_0^{-1}\}$. Since $(x \{x_0^{-1}\})_0 = x_0 x_0^{-1} = 1$, the difference $1 - x \{x_0^{-1}\}$ has first component 0, so it lies in the image of $V$.

> [!hint]- Strong Hint
> Since $V y = (0, y_0, y_1, \dots)$, powers $(Vy)^i$ have their first non-zero component shifted to index $\ge i$. Thus the infinite sum $\sum_{i=0}^\infty (Vy)^i$ converges coordinate-wise in the product topology on $W(k)$, giving an explicit inverse for $x$.

## Solution

> [!success]- Complete Derivation
> Let $k$ be a field of characteristic $p$, and consider the ring of $p$-typical Witt vectors $W(k)$.
>
> ---
>
> ### 1. Properties of the Operators and Teichmüller Representatives
> 1. **The Frobenius $F$ and Verschiebung $V$:**
>    - Because $\operatorname{char}(k) = p$, the map $a \mapsto a^p$ is a ring endomorphism of $k$. Consequently, $F: (x_0, x_1, \dots) \mapsto (x_0^p, x_1^p, \dots)$ is a ring endomorphism of $W(k)$.
>    - The shift operator $V: (x_0, x_1, \dots) \mapsto (0, x_0, x_1, \dots)$ is an additive group endomorphism.
>    - On ghost components:
>      $$
>      (VFx)^{(n)} = p (Fx)^{(n-1)} = p \left(x^{(n)} - p^n x_n\right) \equiv p x^{(n)} \pmod{p^{n+1}}.
>      $$
>      Universal polynomial calculations show that $VF = FV = p \cdot \operatorname{id}_{W(k)}$, so:
>      $$
>      px = VFx.
>      $$
>
> 2. **Product Rule for Shifted Vectors:**
>    By the projection formula $x V(y) = V(F(x)y)$, applying this relation repeatedly yields:
>    $$
>    (V^i x)(V^j y) = V^{i+j}(F^j x \cdot F^i y) \quad \text{for all } i, j \ge 0.
>    $$
>
> 3. **Teichmüller Representatives:**
>    For $a \in k$, denote by $\{a\} = (a, 0, 0, \dots) \in W(k)$ the **Teichmüller lift** of $a$.
>    Its ghost components are:
>    $$
>    \{a\}^{(n)} = a^{p^n}.
>    $$
>    Since $\{a\}^{(n)} \{b\}^{(n)} = a^{p^n} b^{p^n} = (ab)^{p^n} = \{ab\}^{(n)}$, the map $a \mapsto \{a\}$ is multiplicative:
>    $$
>    \{a\} \{b\} = \{ab\} \quad \text{for all } a, b \in k.
>    $$
>    In particular, for $a \ne 0$, $\{a\} \{a^{-1}\} = \{1\} = (1, 0, 0, \dots) = 1_{W(k)}$.
>
> 4. **Expansion of Witt Vectors:**
>    For any $x = (x_0, x_1, x_2, \dots) \in W(k)$, we have $V^i \{x_i\} = (0, \dots, 0, x_i, 0, \dots)$ where $x_i$ appears at index $i$.
>    Therefore, in the product topology on $W(k) = k^{\mathbf{N}}$, the series converges:
>    $$
>    x = \sum_{i=0}^\infty V^i \{x_i\}.
>    $$
>
> ---
>
> ### 2. Invertibility of Elements with $x_0 \ne 0$
> Let $x = (x_0, x_1, x_2, \dots) \in W(k)$ with $x_0 \ne 0$.
>
> - **Step 1: Normalization.**
>   Since $k$ is a field and $x_0 \ne 0$, the inverse $x_0^{-1} \in k$ exists.
>   Consider the element:
>   $$
>   u = x \cdot \{x_0^{-1}\}.
>   $$
>   The 0-th component of a product of Witt vectors is the ordinary product of their 0-th components:
>   $$
>   u_0 = (x \cdot \{x_0^{-1}\})_0 = x_0 \cdot x_0^{-1} = 1.
>   $$
>   Therefore, the vector $1 - u = 1 - x \{x_0^{-1}\}$ has 0-th component:
>   $$
>   (1 - u)_0 = 1 - u_0 = 1 - 1 = 0.
>   $$
>
> - **Step 2: Representation as $Vy$.**
>   Any Witt vector whose 0-th component is 0 belongs to the image of $V$:
>   $$
>   1 - x \{x_0^{-1}\} = (0, z_1, z_2, \dots) = V(z_1, z_2, \dots) = Vy,
>   $$
>   where $y = (z_1, z_2, \dots) \in W(k)$.
>
> - **Step 3: Convergence of the Neumann Series.**
>   Consider the powers of $Vy$:
>   By definition of $V$, each application of $V$ shifts the components to the right by 1 index:
>   $$
>   Vy \in V(W(k)), \quad (Vy)^2 \in V^2(W(k)), \quad \dots, \quad (Vy)^m \in V^m(W(k)).
>   $$
>   Consequently, the first $m$ components of $(Vy)^m$ are all 0:
>   $$
>   ((Vy)^m)_j = 0 \quad \text{for all } 0 \le j < m.
>   $$
>   Thus the infinite formal sum
>   $$
>   S = \sum_{i=0}^\infty (Vy)^i = 1 + Vy + (Vy)^2 + (Vy)^3 + \dots
>   $$
>   converges coordinate-wise in $W(k)$!
>   Indeed, for each coordinate index $n \ge 0$, the $n$-th coordinate of $(Vy)^i$ is 0 for all $i > n$.
>   Hence the $n$-th coordinate of $S$ is a finite sum:
>   $$
>   S_n = \sum_{i=0}^n ((Vy)^i)_n \in k.
>   $$
>   Therefore, $S \in W(k)$ is a well-defined Witt vector.
>
> - **Step 4: Verification of the Inverse.**
>   Multiplying $S$ by $(1 - Vy)$:
>   $$
>   (1 - Vy) S = (1 - Vy) \sum_{i=0}^\infty (Vy)^i = \sum_{i=0}^\infty (Vy)^i - \sum_{i=0}^\infty (Vy)^{i+1} = (Vy)^0 = 1.
>   $$
>   Since $1 - Vy = x \{x_0^{-1}\}$, this means:
>   $$
>   x \{x_0^{-1}\} S = 1.
>   $$
>   Multiplying both sides by $\{x_0\}$:
>   $$
>   x \left( \{x_0^{-1}\} S \right) = 1.
>   $$
>   Since $\{x_0^{-1}\} S \in W(k)$, this explicitly constructs the two-sided multiplicative inverse:
>   $$
>   x^{-1} = \{x_0^{-1}\} \sum_{i=0}^\infty (Vy)^i \in W(k).
>   $$
>
> Therefore, every element $x \in W(k)$ with $x_0 \ne 0$ is a **unit** in $W(k)$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- This result implies that the maximal ideal of $W(k)$ is $\mathfrak{m} = V(W(k)) = \{(0, x_1, x_2, \dots)\}$.
  Since every element not in $\mathfrak{m}$ is a unit, $W(k)$ is a **local ring** with residue field $W(k)/\mathfrak{m} \cong k$.
- If $k$ is a perfect field, $V(W(k)) = p W(k)$, which proves that $W(k)$ is a complete discrete valuation ring of characteristic 0 with uniformizer $p$ and residue field $k$. For $k = \mathbf{F}_p$, $W(\mathbf{F}_p) \cong \mathbf{Z}_p$.
