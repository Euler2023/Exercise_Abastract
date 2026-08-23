---
title: Artin-Schreier Extensions
aliases:
  - Artin–Schreier Extensions
  - Artin-Schreier Theory
topic: galois-theory
tags:
  - concept
  - definition
  - galois-theory
  - positive-characteristic
  - cyclic-extensions
created: 2026-08-13
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, §6, Theorems 6.3–6.4, printed pp. 290–291, PDF pp. 305–306"
source_status: verified
status: not-started
---

# Artin–Schreier Extensions

## Definition

Let $k$ be a field of characteristic $p>0$. The **Artin–Schreier map** is the additive, $\mathbb F_p$-linear map

$$
\wp:k\longrightarrow k,
\qquad
\wp(x)=x^p-x.
$$

> [!info] Artin–Schreier extension
> An **Artin–Schreier extension** of $k$ is a field
>
> $$
> K=k(\alpha),
> \qquad
> \alpha^p-\alpha=a\in k,
> $$
>
> for which $X^p-X-a$ is irreducible over $k$. It is a cyclic Galois extension of degree $p$.

The derivative of $X^p-X-a$ is $-1$, so an Artin–Schreier polynomial is always separable. If $\alpha$ is one root, then all its roots are

$$
\alpha+c,
\qquad
c\in\mathbb F_p.
$$

This additive translation of the roots is the positive-characteristic analogue of multiplying a Kummer generator by roots of unity.

## Hilbert 90 Input

The direct construction of an Artin–Schreier generator uses [[05 - Galois Theory/Concepts/Hilbert's Theorem 90#Additive Hilbert 90|additive Hilbert 90]]:

> [!abstract] Additive Hilbert 90
> If $K/k$ is cyclic with group $\langle\sigma\rangle$, then
>
> $$
> \operatorname{Tr}_{K/k}(\beta)=0
> \quad\Longleftrightarrow\quad
> \beta=\alpha-\sigma(\alpha)
> $$
>
> for some $\alpha\in K$.

The linked concept proves both this additive form and the multiplicative norm-one form. The present proof uses only the displayed additive statement.

## Artin–Schreier Theorem

> [!abstract] Theorem (Artin–Schreier)
> Let $k$ be a field of characteristic $p>0$.
>
> 1. If $K/k$ is cyclic of degree $p$, then there exist $\alpha\in K$ and $a\in k$ such that
>
>    $$
>    K=k(\alpha),
>    \qquad
>    \alpha^p-\alpha=a.
>    $$
>
> 2. Conversely, for $a\in k$, the polynomial
>
>    $$
>    f_a(X)=X^p-X-a
>    $$
>
>    either has a root in $k$, in which case all its roots lie in $k$, or is irreducible. In the irreducible case, adjoining one root produces a cyclic Galois extension of degree $p$.

### Proof of the forward direction

Let $G=\langle\sigma\rangle$ be the Galois group of $K/k$. Since $[K:k]=p$ and $\operatorname{char}k=p$,

$$
\operatorname{Tr}_{K/k}(-1)=-p=0.
$$

Additive Hilbert 90 supplies $\alpha\in K$ such that

$$
-1=\alpha-\sigma(\alpha),
$$

or equivalently

$$
\sigma(\alpha)=\alpha+1.
$$

Therefore

$$
\sigma^i(\alpha)=\alpha+i,
\qquad
i\in\mathbb F_p.
$$

These $p$ conjugates are distinct, so $[k(\alpha):k]\geq p$. Since $k(\alpha)\subseteq K$ and $[K:k]=p$, one has $K=k(\alpha)$. Finally,

$$
\sigma(\alpha^p-\alpha)
=(\alpha+1)^p-(\alpha+1)
=\alpha^p-\alpha.
$$

Thus $a=\alpha^p-\alpha$ is fixed by $G$ and hence belongs to $k$.

### Proof of the converse direction

Let $\alpha$ be a root of $f_a$. Since

$$
(\alpha+c)^p-(\alpha+c)=\alpha^p-\alpha=a
$$

for every $c\in\mathbb F_p$, the $p$ roots are precisely $\alpha+c$. They are distinct because $f_a'(X)=-1$.

If $\alpha\in k$, then every root lies in $k$. Now suppose no root lies in $k$. If $f_a$ were reducible, it would have a monic factor $g\in k[X]$ of degree $d$ with $1\leq d<p$. Over a splitting field, the roots of $g$ would be a subset

$$
\alpha+c_1,\ldots,\alpha+c_d,
\qquad
c_i\in\mathbb F_p.
$$

The coefficient of $X^{d-1}$ in $g$ would therefore be

$$
-d\alpha-(c_1+cdots+c_d).
$$

This coefficient lies in $k$, and $d$ is nonzero in $k$ because $1\leq d<p$. It would follow that $\alpha\in k$, a contradiction. Hence $f_a$ is irreducible.

Consequently $[k(\alpha):k]=p$. The field $k(\alpha)$ already contains all roots $\alpha+c$, so it is the splitting field of the separable polynomial $f_a$. It is therefore Galois, and

$$
\operatorname{Gal}(k(\alpha)/k)
=\{\sigma_c:\alpha\mapsto\alpha+c\mid c\in\mathbb F_p\}
\cong(\mathbb F_p,+)
\cong C_p.
$$

## Irreducibility and Parameter Classes

The theorem immediately gives

$$
X^p-X-a\text{ is irreducible over }k
\quad\Longleftrightarrow\quad
a\notin\wp(k).
$$

Indeed, $a=\wp(c)$ exactly when $c\in k$ is a root of $X^p-X-a$.

If $\alpha^p-\alpha=a$ and $c\in k$, then

$$
(\alpha+c)^p-(\alpha+c)=a+\wp(c).
$$

Thus the quotient

$$
k/\wp(k)
$$

classifies Artin–Schreier equations up to translation of the generator. More precisely:

1. Elements of $k/\wp(k)$ classify Artin–Schreier $\mathbb Z/p\mathbb Z$-torsors with the additive Galois action identified; the zero class is the split torsor.
2. Nonzero classes classify cyclic degree-$p$ extensions together with a chosen identification of their Galois group with $(\mathbb F_p,+)$.
3. Forgetting that identification also identifies $a$ with $ua$ for $u\in\mathbb F_p^\times$. Hence unmarked cyclic degree-$p$ extensions correspond to one-dimensional $\mathbb F_p$-subspaces of $k/\wp(k)$.

For the third statement, replacing the chosen generator $\sigma$ of the Galois group by $\sigma^u$ and replacing $\alpha$ by $u^{-1}\alpha$ changes the parameter from $a$ to $u^{-1}a$.

## Examples

> [!example] A rational-function extension
> Let $k=\mathbb F_p(t)$ and let
>
> $$
> \alpha^p-\alpha=t.
> $$
>
> Then $t\notin\wp(k)$. Indeed, every pole of $c^p-c$ has order divisible by $p$, whereas $t$ has a pole of order $1$ at infinity. Therefore $X^p-X-t$ is irreducible and
>
> $$
> \mathbb F_p(t,\alpha)/\mathbb F_p(t)
> $$
>
> is cyclic Galois of degree $p$, generated by $\alpha\mapsto\alpha+1$.

> [!example] The finite-field trace criterion
> Let $k=\mathbb F_q$, where $q=p^m$. The kernel of $\wp:k\to k$ is $\mathbb F_p$, so $|\operatorname{im}\wp|=q/p$. Moreover,
>
> $$
> \operatorname{Tr}_{\mathbb F_q/\mathbb F_p}(x^p-x)=0.
> $$
>
> The kernel of the trace also has $q/p$ elements, and hence
>
> $$
> \operatorname{im}\wp
> =\ker\operatorname{Tr}_{\mathbb F_q/\mathbb F_p}.
> $$
>
> Consequently,
>
> $$
> X^p-X-a\text{ has a root in }\mathbb F_q
> \quad\Longleftrightarrow\quad
> \operatorname{Tr}_{\mathbb F_q/\mathbb F_p}(a)=0.
> $$
>
> If the trace is nonzero, the polynomial is irreducible and its root generates $\mathbb F_{q^p}/\mathbb F_q$.

## Comparison with Kummer Extensions

Use a prime $\ell$ in the Kummer column to keep it distinct from the characteristic $p$.

| Feature | Kummer extension | Artin–Schreier extension |
|---|---|---|
| Characteristic | $\operatorname{char}k\nmid\ell$ | $\operatorname{char}k=p$ |
| Additional hypothesis | $\mu_\ell\subset k$ | None beyond characteristic $p$ |
| Equation | $\beta^\ell=a$ | $\alpha^p-\alpha=a$ |
| Galois action | $\beta\mapsto\zeta_\ell\beta$ | $\alpha\mapsto\alpha+c$ |
| Parameter space | $k^\times/k^{\times\ell}$ | $k/\wp(k)$ |
| Underlying symmetry | Multiplicative | Additive |

In characteristic $p$, the polynomial $X^p-a$ has derivative zero and cannot describe a nontrivial separable cyclic extension of degree $p$. Artin–Schreier theory is the additive replacement. Cyclic extensions of degree $p^r$ require the stronger Artin–Schreier–Witt theory, which is outside this note.

## Key Properties

1. Every cyclic degree-$p$ extension in characteristic $p$ is Artin–Schreier.
2. Every Artin–Schreier polynomial is separable because its derivative is $-1$.
3. Its roots form an affine copy of the additive group $\mathbb F_p$.
4. The extension is trivial or split exactly when $a\in\wp(k)$.
5. The additive quotient $k/\wp(k)$ plays the role occupied by $k^\times/k^{\times\ell}$ in Kummer theory.

## Related Concepts

- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert's Theorem 90]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Additive Hilbert 90 and the Artin–Schreier theorem are proved in [S2, Ch. VI, §6, Thms. 6.3–6.4, printed pp. 290–291, PDF pp. 305–306]. The Hilbert 90 proof is recorded in the linked concept; the Artin–Schreier proof above follows Lang's route with the intermediate computations written out.
- The only imported input in the forward direction is additive Hilbert 90, whose proof in the linked note imports the nonvanishing of the trace map for finite separable extensions.
- The quotient and one-dimensional-subspace classification is a standard consequence proved directly from changes of generator above; it is not stated in this form in Lang's Theorem 6.4.
- The finite-field image calculation and rational-function example are independent derivations.
- No treatment under the name “Artin–Schreier” was located in the local Michael Artin, *Algebra*, 2nd ed. Lang's *Algebraic Number Theory* is not used as a source for this concept.
