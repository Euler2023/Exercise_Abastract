---
title: "Exercise Gal120: Automorphisms of Rational Function Fields over Finite Fields"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - rational-function-fields
  - finite-fields
  - fixed-fields
  - projective-general-linear-group
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 36, printed pp. 326-327, PDF pp. 341-342"
created: 2026-09-12
---

# Exercise Gal120: Automorphisms of Rational Function Fields over Finite Fields

## Problem Statement

> [!question]
> Let $k$ be a finite field with $q$ elements. Let $K = k(X)$ be the rational field in one variable. Let $G$ be the group of automorphisms of $K$ obtained by the mappings
> $$
> X \mapsto \frac{aX + b}{cX + d}
> $$
> with $a, b, c, d \in k$ and $ad - bc \ne 0$. Prove the following statements:
> 
> (a) The order of $G$ is $q^3 - q$.
> 
> (b) The fixed field of $G$ is equal to $k(Y)$ where
> $$
> Y = \frac{(X^{q^2} - X)^{q+1}}{(X^q - X)^{q^2+1}}.
> $$
> 
> (c) Let $H_1$ be the subgroup of $G$ consisting of the mappings $X \mapsto aX + b$ with $a \ne 0$. The fixed field of $H_1$ is $k(T)$ where $T = (X^q - X)^{q-1}$.
> 
> (d) Let $H_2$ be the subgroup of $H_1$ consisting of the mappings $X \mapsto X + b$ with $b \in k$. The fixed field of $H_2$ is equal to $k(Z)$ where $Z = X^q - X$.

## Hints

> [!hint]- Weak Hint
> Work in reverse order: start with the smallest subgroup $H_2$, then move to $H_1$, and finally to $G$, using Artin's theorem $[K : K^H] = |H|$ and Lüroth's theorem $[k(X) : k(u)] = \deg(u)$.

> [!hint]- Moderate Hint
> - For (a), identify $G$ with $\operatorname{PGL}_2(\mathbb{F}_q) = \operatorname{GL}_2(\mathbb{F}_q) / \mathbb{F}_q^\times$ and compute the orders.
> - For (d), show that $Z = X^q - X$ is invariant under $X \mapsto X + b$ and that $\deg Z = q = |H_2|$.
> - For (c), show that $T = Z^{q-1}$ is invariant under $Z \mapsto a Z$ for $a \in \mathbb{F}_q^\times$ and that $\deg T = q(q - 1) = |H_1|$.

> [!hint]- Strong Hint
> For (b), express $Y$ in terms of $Z$ by noticing that $X^{q^2} - X = Z^q + Z$. Show that $Y = \frac{(T+1)^{q+1}}{T^q}$, which is in $k(T) = K^{H_1}$. Then verify invariance under $X \mapsto X^{-1}$ to conclude $Y \in K^G$, and compute $\deg Y = q^3 - q = |G|$.

## Solution

> [!success]- Complete Derivation
> Let $k = \mathbb{F}_q$, and let $K = k(X)$ be the rational function field in one variable.
>
> ---
>
> ### Part (a): Order of $G$
> By Exercise 35, the group of automorphisms of $k(X)$ over $k$ is isomorphic to the projective general linear group:
> $$
> G = \operatorname{Aut}_k(k(X)) \cong \operatorname{PGL}_2(\mathbb{F}_q) = \operatorname{GL}_2(\mathbb{F}_q) / Z(\operatorname{GL}_2(\mathbb{F}_q)),
> $$
> where the center $Z(\operatorname{GL}_2(\mathbb{F}_q)) = \{c I_2 \mid c \in \mathbb{F}_q^\times\}$ consists of non-zero scalar matrices.
>
> The order of $\operatorname{GL}_2(\mathbb{F}_q)$ is the number of invertible $2 \times 2$ matrices over $\mathbb{F}_q$:
> $$
> |\operatorname{GL}_2(\mathbb{F}_q)| = (q^2 - 1)(q^2 - q) = q(q - 1)^2(q + 1).
> $$
> The center has order $|\mathbb{F}_q^\times| = q - 1$. Therefore:
> $$
> |G| = \frac{|\operatorname{GL}_2(\mathbb{F}_q)|}{|\mathbb{F}_q^\times|} = \frac{q(q - 1)^2(q + 1)}{q - 1} = q(q - 1)(q + 1) = q(q^2 - 1) = q^3 - q.
> $$
>
> ---
>
> ### Part (d): Fixed Field of $H_2$
> The subgroup $H_2$ consists of translations $\tau_b: X \mapsto X + b$ for $b \in k = \mathbb{F}_q$.
> Since there are $q$ choices for $b$, we have $|H_2| = q$.
>
> Let $Z = X^q - X \in k(X)$.
> For each $b \in \mathbb{F}_q$, since $b^q = b$, we have:
> $$
> \tau_b(Z) = (X + b)^q - (X + b) = X^q + b^q - X - b = X^q - X = Z.
> $$
> Thus $Z$ is fixed by all elements of $H_2$, which implies $k(Z) \subseteq K^{H_2}$.
>
> Now compute the field extension degree:
> By Exercise 35(a), the degree $[k(X) : k(Z)] = \deg(X^q - X) = q$.
> On the other hand, by Artin's theorem on fixed fields:
> $$
> [k(X) : K^{H_2}] = |H_2| = q.
> $$
> By the tower property for $k(Z) \subseteq K^{H_2} \subseteq k(X)$:
> $$
> [k(X) : k(Z)] = [k(X) : K^{H_2}] [K^{H_2} : k(Z)] \implies q = q \cdot [K^{H_2} : k(Z)].
> $$
> Hence $[K^{H_2} : k(Z)] = 1$, which proves:
> $$
> K^{H_2} = k(Z) = k(X^q - X).
> $$
>
> ---
>
> ### Part (c): Fixed Field of $H_1$
> The subgroup $H_1$ consists of affine transformations $X \mapsto aX + b$ with $a \in \mathbb{F}_q^\times$ and $b \in \mathbb{F}_q$.
> Its order is $|H_1| = q(q - 1)$.
>
> Notice that $H_2$ is a normal subgroup of $H_1$, and the quotient group $H_1 / H_2 \cong \mathbb{F}_q^\times$ acts on the fixed field $K^{H_2} = k(Z)$ via scalings $\sigma_a: X \mapsto aX$.
> Under $\sigma_a$, since $a^q = a$:
> $$
> \sigma_a(Z) = (aX)^q - (aX) = a^q X^q - aX = a(X^q - X) = a Z.
> $$
> Consider $T = Z^{q-1} = (X^q - X)^{q-1}$.
> For every $a \in \mathbb{F}_q^\times$, Fermat's Little Theorem gives $a^{q-1} = 1$, so:
> $$
> \sigma_a(T) = (a Z)^{q-1} = a^{q-1} Z^{q-1} = Z^{q-1} = T.
> $$
> Since $T$ is invariant under $H_2$ (being a polynomial in $Z$) and under all scalings $\sigma_a$, $T$ is fixed by all of $H_1$.
> Hence $k(T) \subseteq K^{H_1}$.
>
> The degree of $T$ as a rational function in $X$ is:
> $$
> \deg_X(T) = \deg_X((X^q - X)^{q-1}) = q(q - 1).
> $$
> By Exercise 35(a), $[k(X) : k(T)] = q(q - 1)$.
> By Artin's theorem, $[k(X) : K^{H_1}] = |H_1| = q(q - 1)$.
> Comparing degrees, we conclude:
> $$
> K^{H_1} = k(T) = k((X^q - X)^{q-1}).
> $$
>
> ---
>
> ### Part (b): Fixed Field of $G$
> Consider the element
> $$
> Y = \frac{(X^{q^2} - X)^{q+1}}{(X^q - X)^{q^2+1}}.
> $$
> We express $Y$ in terms of $Z = X^q - X$:
> Notice that
> $$
> X^{q^2} - X = (X^q)^q - X = (Z + X)^q - X = Z^q + X^q - X = Z^q + Z.
> $$
> Substituting this into the definition of $Y$:
> $$
> Y = \frac{(Z^q + Z)^{q+1}}{Z^{q^2+1}} = \frac{Z^{q+1}(Z^{q-1} + 1)^{q+1}}{Z^{q^2+1}} = \frac{(Z^{q-1} + 1)^{q+1}}{Z^{q^2 - q}} = \frac{(T + 1)^{q+1}}{T^q}.
> $$
> Since $Y = \frac{(T + 1)^{q+1}}{T^q} \in k(T)$, $Y$ is fixed by every automorphism in $H_1$.
>
> By Exercise 35(c), $G$ is generated by $H_1$ and the inversion $\iota: X \mapsto X^{-1}$.
> Thus to prove that $Y$ is fixed by all of $G$, it suffices to check that $\iota(Y) = Y$.
>
> Under $\iota(X) = X^{-1}$:
> $$
> \iota(X^{q^2} - X) = X^{-q^2} - X^{-1} = -\frac{X^{q^2} - X}{X^{q^2+1}},
> $$
> $$
> \iota(X^q - X) = X^{-q} - X^{-1} = -\frac{X^q - X}{X^{q+1}}.
> $$
> Applying $\iota$ to $Y$:
> $$
> \iota(Y) = \frac{\left(-\frac{X^{q^2} - X}{X^{q^2+1}}\right)^{q+1}}{\left(-\frac{X^q - X}{X^{q+1}}\right)^{q^2+1}} = \frac{(-1)^{q+1} (X^{q^2} - X)^{q+1} \cdot X^{-(q^2+1)(q+1)}}{(-1)^{q^2+1} (X^q - X)^{q^2+1} \cdot X^{-(q+1)(q^2+1)}}.
> $$
> Observe that:
> 1. The powers of $X$ in the numerator and denominator are both $-(q^2+1)(q+1)$, so they cancel completely.
> 2. The sign factor is:
>    $$
>    \frac{(-1)^{q+1}}{(-1)^{q^2+1}} = (-1)^{(q+1) - (q^2+1)} = (-1)^{q - q^2} = (-1)^{-q(q-1)}.
>    $$
>    Since $q(q - 1)$ is always an even integer (for any prime power $q$, either $q$ is even or $q - 1$ is even), $(-1)^{-q(q-1)} = 1$.
> Therefore:
> $$
> \iota(Y) = \frac{(X^{q^2} - X)^{q+1}}{(X^q - X)^{q^2+1}} = Y.
> $$
> Hence $Y$ is fixed by $\iota$, and since $Y$ is also fixed by $H_1$, it is fixed by the entire group $G$:
> $$
> k(Y) \subseteq K^G.
> $$
>
> Finally, we compute the degree $[k(X) : k(Y)]$.
> Using the tower $k(Y) \subseteq k(T) \subseteq k(X)$:
> In $k(T)$, $Y = \frac{(T + 1)^{q+1}}{T^q}$ is a rational function in $T$ with $\gcd((T+1)^{q+1}, T^q) = 1$.
> Its degree as a rational function in $T$ is:
> $$
> \deg_T Y = \max(\deg(T+1)^{q+1}, \deg(T^q)) = q + 1.
> $$
> By Exercise 35(a), $[k(T) : k(Y)] = q + 1$.
> By part (c), $[k(X) : k(T)] = q(q - 1)$.
> By the tower law:
> $$
> [k(X) : k(Y)] = [k(X) : k(T)] [k(T) : k(Y)] = q(q - 1)(q + 1) = q^3 - q.
> $$
> On the other hand, by Artin's theorem:
> $$
> [k(X) : K^G] = |G| = q^3 - q.
> $$
> Since $k(Y) \subseteq K^G$ and both have degree $q^3 - q$ over $k(X)$, we conclude:
> $$
> K^G = k(Y).
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- The fixed field $k(Y)$ is rational, which is a particular manifestation of Lüroth's theorem.
- The polynomials $X^q - X$ and $X^{q^2} - X$ play a fundamental role in the theory of Drinfeld modules and Carlitz modules, where $Y$ appears as a modular invariant (analogous to the $j$-invariant for elliptic curves).
