---
title: Quartic Resolvents and Galois Groups
topic: galois-theory
tags:
  - concept
  - definition
  - galois-theory
  - quartic-polynomials
  - resolvent-cubic
created: 2026-08-11
---

# Quartic Resolvents and Galois Groups

## Definition

> [!info] Artin's resolvent cubic
> Let
> $$
> f(x)=x^4-a_1x^3+a_2x^2-a_3x+a_4
> $$
> be an irreducible separable quartic over a field $F$, with roots $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ in its splitting field. Define
> $$
> \begin{aligned}
> \beta_1&=\alpha_1\alpha_2+\alpha_3\alpha_4,\\
> \beta_2&=\alpha_1\alpha_3+\alpha_2\alpha_4,\\
> \beta_3&=\alpha_1\alpha_4+\alpha_2\alpha_3.
> \end{aligned}
> $$
> The **resolvent cubic** in Artin's convention is
> $$
> g(y)=(y-\beta_1)(y-\beta_2)(y-\beta_3)\in F[y].
> $$

The three $\beta_i$ correspond to the three ways to partition four roots into two unordered pairs. A permutation of the four roots permutes these three partitions, producing a homomorphism
$$
S_4\longrightarrow S_3
$$
whose kernel is the transitive Klein four group
$$
D_2=\{1,(12)(34),(13)(24),(14)(23)\}.
$$
This is why a cubic polynomial can detect much of a quartic Galois group.

## Explicit Formula

The symmetric functions of the resolvent roots are
$$
\begin{aligned}
\beta_1+\beta_2+\beta_3&=a_2,\\
\beta_1\beta_2+\beta_1\beta_3+\beta_2\beta_3&=a_1a_3-4a_4,\\
\beta_1\beta_2\beta_3&=a_1^2a_4+a_3^2-4a_2a_4.
\end{aligned}
$$
Therefore
$$
g(y)=y^3-a_2y^2+(a_1a_3-4a_4)y
+4a_2a_4-a_1^2a_4-a_3^2.
$$

> [!warning] Convention warning
> Other authors shift the quartic first or use different signs and scalar multiples for the resolvent roots. A resolvent formula should always be matched to its stated definition before it is used.

## Transitive Quartic Groups

If $f$ is irreducible, its Galois group acts transitively on its four roots. Up to conjugacy in $S_4$, the possibilities are
$$
S_4,\qquad A_4,\qquad D_4,\qquad C_4,\qquad D_2.
$$
Here Artin uses $D_4$ for the dihedral group of order $8$ and $D_2$ for the transitive Klein four group.

## Discriminant and Resolvent Tests

> [!abstract] Discriminant test
> Let $D=\operatorname{disc}(f)$. Then
> $$
> D\in F^{\times2}
> \iff
> G\subseteq A_4.
> $$
> Consequently, a square discriminant gives $G=A_4$ or $D_2$, while a nonsquare discriminant gives $G=S_4,D_4,$ or $C_4$.

> [!abstract] Resolvent test
> The factorization of $g$ over $F$ records the orbit structure of $G$ on the three pair partitions:
>
> - if $g$ splits completely, then $G=D_2$;
> - if $g$ has one root in $F$ and an irreducible quadratic factor, then $G=D_4$ or $C_4$;
> - if $g$ is irreducible, then $G=S_4$ or $A_4$.

Combining the two tests gives Artin's classification table:

| Resolvent cubic | $D$ a square | $D$ not a square |
|---|---|---|
| $g$ reducible | $D_2$ | $D_4$ or $C_4$ |
| $g$ irreducible | $A_4$ | $S_4$ |

The two tests do not by themselves distinguish $D_4$ from $C_4$.

## Why a Rational Resolvent Root Produces Square Roots

If $\beta_1\in F$, the partition
$$
\{\alpha_1,\alpha_2\}\mid\{\alpha_3,\alpha_4\}
$$
is defined over $F$. Writing
$$
u=\alpha_1+\alpha_2,\quad v=\alpha_3+\alpha_4,\quad
p=\alpha_1\alpha_2,\quad q=\alpha_3\alpha_4
$$
reduces the quartic to two quadratic factors after adjoining square roots. This mechanism is made explicit in [[05 - Galois Theory/Exercises/Exercise Gal8 - Recovering a Quartic Root from a Resolvent Root|Exercise Gal8]].

## Examples

> [!example] $x^4+x+1$
> Its resolvent is $y^3-4y-1$, which is irreducible over $\mathbb Q$, and its discriminant is $229$, a nonsquare. Hence its Galois group is $S_4$.

> [!example] $x^4+1$
> This is the cyclotomic polynomial $\Phi_8(x)$. Its splitting field has Galois group
> $$
> (\mathbb Z/8\mathbb Z)^\times\cong D_2.
> $$

## Key Properties

1. The resolvent coefficients are symmetric functions of the quartic roots, so they lie in the base field.
2. The kernel of the action on the three pair partitions is $D_2$.
3. The quartic and its Artin resolvent have the same discriminant.
4. A rational resolvent root reduces the solution of the quartic to nested quadratic equations.
5. Discriminant and resolvent data classify all irreducible quartic Galois groups except for the $D_4/C_4$ ambiguity.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]
- [[05 - Galois Theory/Concepts/Ruler and Compass|Ruler and Compass Constructions]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definitions, subgroup list, discriminant criterion, and resolvent criterion are proved in Artin [S1, Ch. 16, §16.9, printed pp. 493–496, PDF pp. 505–508]. The explicit coefficient formula is independently expanded in Exercise Gal9. The examples and explanatory organization in this note are independent exposition.
