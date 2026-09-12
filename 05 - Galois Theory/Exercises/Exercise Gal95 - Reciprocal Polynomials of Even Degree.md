---
title: "Exercise Gal95: Reciprocal Polynomials of Even Degree"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - reciprocal-polynomials
  - minimal-polynomial
  - roots-of-unity
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 11, printed p. 322, PDF p. 337"
created: 2026-09-12
---

# Exercise Gal95: Reciprocal Polynomials of Even Degree

## Problem Statement

> [!question] Exercise VI.11
> A polynomial $f(X)$ is said to be reciprocal if whenever $\alpha$ is a root, then $1/\alpha$ is also a root. We suppose that $f$ has coefficients in a real subfield $k$ of the complex numbers. If $f$ is irreducible over $k$, and has a nonreal root of absolute value 1, show that $f$ is reciprocal of even degree.

## Hints

> [!hint]- Hint 1: Complex Conjugates on the Unit Circle
> For any complex number $\alpha$ of absolute value 1, express the complex conjugate $\overline{\alpha}$ in terms of $1/\alpha$. Since $k \subseteq \mathbb R$, show that $\overline{\alpha}$ must be a root of $f(X)$.

> [!hint]- Hint 2: Reciprocal Polynomial Relation
> Consider the reversed polynomial $f^*(X) = X^n f(1/X) \in k[X]$. Use the irreducibility of $f(X)$ to deduce that $f^*(X)$ is a scalar multiple of $f(X)$.

> [!hint]- Hint 3: Parity of the Degree
> If an irreducible reciprocal polynomial has odd degree, evaluate it at $X = -1$. Deduce that $X + 1$ would be a factor, contradicting the existence of non-real roots.

## Solution

> [!success]- Solution
>
> Let $k \subseteq \mathbb R$ and let $f(X) \in k[X]$ be irreducible over $k$ of degree $n$. Let $\alpha \in \mathbb C \setminus \mathbb R$ be a root of $f$ satisfying $|\alpha| = 1$.
>
> ### 1. $f(X)$ is Reciprocal
>
> Because the coefficients of $f(X)$ lie in $k \subseteq \mathbb R$, the polynomial is invariant under complex conjugation:
> $$
> f(\overline{z}) = \overline{f(z)} \quad \text{for all } z \in \mathbb C.
> $$
> Since $f(\alpha) = 0$, it follows that
> $$
> f(\overline{\alpha}) = \overline{f(\alpha)} = 0.
> $$
> Because $|\alpha| = 1$, we have $\alpha \overline{\alpha} = |\alpha|^2 = 1$, and therefore
> $$
> \frac{1}{\alpha} = \overline{\alpha}.
> $$
> Thus $1/\alpha$ is a root of $f(X)$.
>
> Now consider the reciprocal polynomial
> $$
> f^*(X) = X^n f\left(\frac{1}{X}\right) \in k[X].
> $$
> Evaluating $f^*$ at $\alpha$:
> $$
> f^*(\alpha) = \alpha^n f\left(\frac{1}{\alpha}\right) = \alpha^n f(\overline{\alpha}) = 0.
> $$
> Thus $f^*(X)$ shares the root $\alpha$ with $f(X)$.
> Because $f(X)$ is irreducible over $k$ and $\alpha$ is a root of both $f(X)$ and $f^*(X)$, $f(X)$ must divide $f^*(X)$ in $k[X]$.
> Furthermore, since $\deg f^* \le n = \deg f$, there exists a constant $c \in k^\times$ such that
> $$
> f^*(X) = c f(X).
> $$
>
> If $\beta \in \mathbb C$ is any root of $f(X)$, then $\beta \neq 0$ (since $f(0) \neq 0$ because $f(1/\alpha) = 0$), and
> $$
> 0 = c f(\beta) = f^*(\beta) = \beta^n f\left(\frac{1}{\beta}\right) \implies f\left(\frac{1}{\beta}\right) = 0.
> $$
> Hence, whenever $\beta$ is a root of $f(X)$, $1/\beta$ is also a root of $f(X)$. By definition, $f(X)$ is reciprocal.
>
> ---
>
> ### 2. $\deg f$ is Even
>
> Suppose, for contradiction, that $n = \deg f$ is odd.
>
> From $X^n f(1/X) = c f(X)$, replacing $X$ by $1/X$ yields $c^2 = 1$, so $c = \pm 1$.
> - If $c = 1$: evaluating $X^n f(1/X) = f(X)$ at $X = -1$ gives
>   $$
>   (-1)^n f(-1) = f(-1).
>   $$
>   Since $n$ is odd, $(-1)^n = -1$, so $-f(-1) = f(-1)$, which forces $2f(-1) = 0$, so $f(-1) = 0$.
> - If $c = -1$: evaluating $X^n f(1/X) = -f(X)$ at $X = 1$ gives
>   $$
>   (1)^n f(1) = -f(1) \implies 2f(1) = 0 \implies f(1) = 0.
>   $$
>
> In either case, $f(X)$ has a rational root ($\pm 1 \in \mathbb Q \subseteq k$).
> Because $f(X) \in k[X]$ is irreducible over $k$, the only irreducible polynomials having a root in $k$ are linear polynomials of degree 1.
> Hence $f(X) = a(X \pm 1)$ for some $a \in k^\times$.
>
> But if $\deg f = 1$, the only root of $f$ would be $\pm 1 \in \mathbb R$, contradicting the assumption that $f$ has a non-real root $\alpha \in \mathbb C \setminus \mathbb R$.
>
> Alternatively, the roots of $f(X)$ partition into disjoint pairs $\{\beta, 1/\beta\}$. The condition $\beta = 1/\beta$ is equivalent to $\beta^2 = 1$, i.e., $\beta = \pm 1$. As established above, $f$ has no real roots at $\pm 1$ because $f$ is irreducible of degree $> 1$. Thus every pair $\{\beta, 1/\beta\}$ consists of two distinct non-real numbers. Consequently, the total number of roots $n = \deg f$ is the sum of sizes of these pairs, hence an even number.
>
> Therefore, $f$ is reciprocal of even degree.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Galois Theory is primary because reciprocal polynomials, unit-circle roots, and pairing of conjugates under complex conjugation are foundational tools in the study of cyclotomic and CM field automorphisms.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 11, printed p. 322, PDF p. 337.
