---
title: Elliptic Curves and Modularity
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
  - number-theory
created: 2026-01-19
---

# Elliptic Curves and Modularity

## Elliptic Curves

> [!info] Definition (Elliptic Curve)
> An **elliptic curve** over $\mathbb{Q}$ is a smooth projective curve of the form:
> $$E: y^2 = x^3 + Ax + B$$
> with $4A^3 + 27B^2 \neq 0$ (nonsingular).

## L-function of an Elliptic Curve

> [!info] Definition
> For $E/\mathbb{Q}$ with conductor $N$, the **Hasse-Weil L-function** is:
> $$L(E, s) = \prod_{p \nmid N} \frac{1}{1 - a_p p^{-s} + p^{1-2s}} \cdot \prod_{p | N} L_p(E, s)^{-1}$$
> where $a_p = p + 1 - \#E(\mathbb{F}_p)$.

## The Modularity Theorem

> [!abstract] Theorem (Taniyama-Shimura-Weil, proved by Wiles et al.)
> For every elliptic curve $E/\mathbb{Q}$ of conductor $N$, there exists a weight 2 newform $f \in S_2(\Gamma_0(N))$ such that:
> $$L(E, s) = L(f, s)$$
> Equivalently, $a_p(E) = a_p(f)$ for all primes $p$.

## Historical Significance

> [!tip] Fermat's Last Theorem
> The Modularity Theorem, combined with work of Ribet, implies **Fermat's Last Theorem**:
> $$x^n + y^n = z^n \text{ has no positive integer solutions for } n \geq 3$$

The proof strategy (Frey-Ribet-Wiles):
1. Assume $a^p + b^p = c^p$ for odd prime $p > 2$
2. Construct the Frey curve $E: y^2 = x(x-a^p)(x+b^p)$
3. Show $E$ cannot be modular (Ribet)
4. But all elliptic curves over $\mathbb{Q}$ are modular (Wiles)
5. Contradiction!

## Modular Parametrization

> [!abstract] Theorem
> If $E/\mathbb{Q}$ has conductor $N$, there exists a non-constant morphism:
> $$\phi: X_0(N) \to E$$
> where $X_0(N) = \mathbb{H}^*/\Gamma_0(N)$ is the modular curve.

## Connection to j-Invariant

Every elliptic curve over $\mathbb{C}$ is isomorphic to $\mathbb{C}/(\mathbb{Z} + \mathbb{Z}\tau)$ for some $\tau \in \mathbb{H}$.

The [[07 - Modular Forms/Concepts/j-Invariant|j-invariant]] satisfies:
$$j(E) = j(\tau) = 1728 \frac{4A^3}{4A^3 + 27B^2}$$

## Galois Representations

> [!info] Definition
> For a newform $f = \sum a_n q^n$, there exists a 2-dimensional Galois representation:
> $$\rho_f: \text{Gal}(\bar{\mathbb{Q}}/\mathbb{Q}) \to \text{GL}_2(\bar{\mathbb{Q}}_\ell)$$
> with $\text{tr}(\rho_f(\text{Frob}_p)) = a_p$ for $p \nmid N\ell$.

The modularity theorem identifies this with the Tate module representation of $E$.

## Conductor

> [!info] Definition
> The **conductor** $N$ of $E$ measures the "bad reduction" of $E$.
> - $p \nmid N$: good reduction at $p$
> - $p \| N$: multiplicative reduction
> - $p^2 | N$: additive reduction

## Examples

> [!example] Example 1: $y^2 = x^3 - x$ (Conductor 32)
> Has complex multiplication by $\mathbb{Z}[i]$, $j = 1728$.
> Corresponds to a modular form in $S_2(\Gamma_0(32))$.

> [!example] Example 2: $y^2 + y = x^3 - x^2$ (Conductor 11)
> First elliptic curve in the Cremona database.
> $a_2 = -2$, $a_3 = -1$, $a_5 = 1$, ...

> [!example] Example 3: Frey curves
> $y^2 = x(x-a^p)(x+b^p)$ have conductor $N = 2 \cdot \text{rad}(abc)^2$.

## Sato-Tate Conjecture

> [!abstract] Theorem (proved 2011)
> For a non-CM elliptic curve $E/\mathbb{Q}$, the normalized values $a_p/2\sqrt{p}$ are equidistributed according to the Sato-Tate distribution:
> $$\frac{2}{\pi}\sqrt{1 - t^2} dt$$

## Related Concepts

- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[05 - Galois Theory/Galois Theory Hub|Galois Theory]]
