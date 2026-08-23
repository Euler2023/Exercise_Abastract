---
title: Algebraic Closure
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, §15.10, Thm. 15.10.1, printed pp. 471–472, PDF pp. 483–484 (circle-image proof only)"
source_status: partially-verified
status: not-started
figures:
  - "Attachments/artin-algebra-2e-ch15-ex10.4-polynomial-circle-images.png"
---

# Algebraic Closure

## Definitions

> [!info] Definition (Algebraically Closed)
> A field $F$ is **algebraically closed** if every non-constant polynomial in $F[x]$ has a root in $F$.
>
> Equivalently: every polynomial in $F[x]$ splits completely in $F$.

> [!info] Definition (Algebraic Closure)
> An **algebraic closure** of a field $F$, denoted $\overline{F}$, is a field extension that is:
> 1. Algebraic over $F$
> 2. Algebraically closed

## Equivalent Characterizations

> [!tip] A field $K$ is algebraically closed iff:
> 1. Every polynomial in $K[x]$ has a root in $K$
> 2. Every polynomial in $K[x]$ splits in $K$
> 3. Every irreducible polynomial in $K[x]$ has degree 1
> 4. $K$ has no proper algebraic extensions

## Key Properties

1. Every field has an algebraic closure (requires Zorn's Lemma)
2. The algebraic closure is unique up to isomorphism
3. After fixing an embedding into an algebraically closed overfield, $\overline{F}$ may be identified with the subfield of elements algebraic over $F$; the phrase “smallest algebraically closed field containing $F$” is only meaningful relative to such a choice
4. $\overline{\overline{F}} = \overline{F}$ (already closed)
5. If $E/F$ is algebraic and $E$ is algebraically closed, then $E$ is an algebraic closure of $F$ and hence is $F$-isomorphic to $\overline{F}$; literal equality requires a chosen common overfield and identification

## Examples

> [!example] Example 1: $\overline{\mathbb{R}} = \mathbb{C}$
> The algebraic closure of $\mathbb{R}$ is $\mathbb{C}$:
> - $\mathbb{C}$ is algebraic over $\mathbb{R}$ (degree 2)
> - $\mathbb{C}$ is algebraically closed (Fundamental Theorem of Algebra)

> [!example] Example 2: $\overline{\mathbb{Q}}$
> The algebraic closure of $\mathbb{Q}$:
> - Contains all algebraic numbers
> - Countably infinite
> - Properly contained in $\mathbb{C}$

> [!example] Example 3: $\overline{\mathbb{F}_p}$
> The algebraic closure of finite field $\mathbb{F}_p$:
> - Infinite field
> - Contains $\mathbb{F}_{p^n}$ for all $n$
> - $\overline{\mathbb{F}_p} = \bigcup_{n=1}^{\infty} \mathbb{F}_{p^n}$

> [!example] Example 4: $\mathbb{C}$ is algebraically closed
> By the Fundamental Theorem of Algebra:
> - Every non-constant polynomial has a complex root
> - $\overline{\mathbb{C}} = \mathbb{C}$

## Theorems

> [!abstract] Existence Theorem
> Every field $F$ has an algebraic closure $\overline{F}$.
>
> *Proof requires*: Zorn's Lemma or equivalent axiom of choice argument.

> [!abstract] Uniqueness Theorem
> If $E$ and $E'$ are both algebraic closures of $F$, then there exists an $F$-isomorphism $\phi: E \to E'$.

> [!abstract] Fundamental Theorem of Algebra
> $\mathbb{C}$ is algebraically closed.
>
> *Proof approaches*: Complex analysis (Liouville), topology (covering spaces), algebra (Galois theory).

## Artin's Circle-Image Proof of the Fundamental Theorem of Algebra

> [!note] Source and proof status
> Artin gives the following circle-image argument as a proof outline of Theorem 15.10.1. The strategy, the large-radius estimate, and the comparison of small and large circles are from the book. The explicit homotopies and the statement of homotopy invariance below expand the topological step that the outline leaves implicit. [S1, Ch. 15, §15.10, Thm. 15.10.1, printed pp. 471–472, PDF pp. 483–484]

Let
$$
f(z)=z^n+a_{n-1}z^{n-1}+\cdots+a_1z+a_0
$$
be a monic nonconstant polynomial with complex coefficients. Dividing by the leading coefficient reduces the general case to this one. If $a_0=0$, then $0$ is already a root, so suppose that $a_0\ne0$.

For $r>0$, define the circle and its image curve by
$$
C_r=\{z\in\mathbb C:|z|=r\},
\qquad
\gamma_r(\theta)=f(re^{i\theta}),\quad 0\le\theta\le2\pi.
$$
Thus $f(C_r)$ is not a circle in general: it is the closed curve traced in the **value plane** when the input $z$ travels once counterclockwise around the circle $C_r$ in the **domain plane**.

### 1. Large circles wind $n$ times around the origin

The leading term sends $re^{i\theta}$ to
$$
(re^{i\theta})^n=r^ne^{in\theta},
$$
which winds $n$ times around $0$. Let
$$
M=\max\{1,|a_0|,\ldots,|a_{n-1}|\}.
$$
If $r\ge10nM$, then for $|z|=r$,
$$
|f(z)-z^n|
\le \sum_{j=0}^{n-1}|a_j|r^j
\le nMr^{n-1}
\le \frac{1}{10}r^n.
$$
Consequently the straight-line homotopy
$$
H_t(z)=z^n+t\bigl(f(z)-z^n\bigr),\qquad 0\le t\le1,
$$
never meets $0$ on $C_r$. Hence $f(C_r)$ and $z^n(C_r)$ have the same winding number about $0$, namely $n$.

### 2. Small circles have winding number zero

For sufficiently small $r>0$,
$$
|f(z)-a_0|<|a_0|\qquad (|z|=r).
$$
The image $f(C_r)$ therefore lies in the disk centered at $a_0$ with radius $|a_0|$, a disk that does not contain $0$. Equivalently, the straight-line homotopy from $f(C_r)$ to the constant loop at $a_0$ avoids $0$. Thus the winding number of $f(C_r)$ about $0$ is $0$.

### 3. The change forces a root

Assume for contradiction that $f$ has no complex root. Then $f(C_r)$ avoids $0$ for every $r>0$. Varying $r$ continuously would give a homotopy in $\mathbb C\setminus\{0\}$ from a small-radius image curve to a large-radius one. Winding number is invariant under such a homotopy, but the two winding numbers computed above are $0$ and $n$. This contradiction shows that for some radius $r'$ and some $\alpha\in C_{r'}$,
$$
f(\alpha)=0.
$$
Therefore every nonconstant polynomial in $\mathbb C[z]$ has a complex root. Repeatedly factoring out linear terms shows that it splits completely, so $\mathbb C$ is algebraically closed.

> [!warning] Imported topological input
> The proof uses homotopy invariance of the winding number for loops in $\mathbb C\setminus\{0\}$. Artin's text presents the proof as an outline and expresses this step geometrically through the continuous variation of $f(C_r)$.

## What the F20 Visualization Shows

For the archived computation,
$$
f(z)=z^3-3z+1.
$$
Each blue curve in the figure is the parametrized image
$$
\theta\longmapsto f(re^{i\theta}),
$$
and the black point is the target value $0$ in the value plane.

![[Attachments/artin-algebra-2e-ch15-ex10.4-polynomial-circle-images.png]]

Two different kinds of special radii should be distinguished:

1. **Root radii.** The three roots have moduli approximately
   $$
   0.347296,\qquad 1.532089,\qquad 1.879385.
   $$
   At such a radius, $f(C_r)$ passes through the black point $0$. These crossings are what allow the winding number about $0$ to change from $0$ to $3$ in Artin's proof.
2. **Critical radii.** Since
   $$
   f'(z)=3(z^2-1),
   $$
   both critical points $z=\pm1$ have modulus $1$. At $r=1$, the velocity
   $$
   \frac{d}{d\theta}f(re^{i\theta})=ire^{i\theta}f'(re^{i\theta})
   $$
   vanishes at two parameter values. This is where the drawn curve can develop singular tangencies and change its number of visible loops. This is the phenomenon studied in [[03 - Field Theory/Exercises/Exercise F19 - Loop Changes in Polynomial Images of Circles|Exercise F19]], and it is distinct from crossing the target origin.

The cubic was chosen because it makes both mechanisms visible in one manageable example: it has degree $3$, nonzero constant term, three distinct roots, and two critical points on the same circle. The six-panel plot is a **computational visualization**, not part of Artin's printed proof and not a proof by itself. See [[03 - Field Theory/Exercises/Exercise F20 - Visualizing Polynomial Images of Circles|Exercise F20]] for the Sage generator and exact sampling parameters.

## Construction

> [!info] Constructing $\overline{F}$
> Start with $F_0 = F$. Iteratively:
> 1. Let $F_{n+1}$ be the splitting field over $F_n$ of all polynomials in $F_n[x]$
> 2. Take $\overline{F} = \bigcup_{n=0}^{\infty} F_n$
>
> This process eventually stabilizes at an algebraically closed field.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

This note has a named source, but its current citation does not provide complete printed-page and physical-PDF-page provenance for every substantive claim. Treat the definitions and theorem statements as only partially source-verified until a bounded page-level audit is recorded.
