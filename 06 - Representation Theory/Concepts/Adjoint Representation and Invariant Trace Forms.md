---
title: Adjoint Representation and Invariant Trace Forms
aliases:
  - Adjoint Representation
  - Invariant Trace Form
  - Adjoint Action and Killing Form
topic: representation-theory
tags:
  - concept
  - representation-theory
  - lie-theory
  - adjoint-representation
  - invariant-forms
created: 2026-08-24
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Exs. M.11–M.13, printed p. 289, PDF p. 301; Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercises 14-15, printed pp. 639-640, PDF pp. 654-655; terminology compared with the standard Lie-algebra definition"
source_status: verified-with-terminology-warning
status: not-started
---

# Adjoint Representation and Invariant Trace Forms

## Definition

For a matrix Lie group $G$ with Lie algebra $\mathfrak g$, the **adjoint representation** is

$$
\operatorname{Ad}:G\longrightarrow GL(\mathfrak g),
\qquad
\operatorname{Ad}_P(A)=PAP^{-1}.
$$

Its differential at the identity is the adjoint representation of the Lie algebra,

$$
\operatorname{ad}_A(B)=[A,B].
$$

## Why Conjugation Preserves the Lie Algebra

If $A\in\mathfrak g$, then $e^{tA}\in G$. Hence for $P\in G$,

$$
Pe^{tA}P^{-1}=e^{tPAP^{-1}}\in G,
$$

so $PAP^{-1}\in\mathfrak g$. This argument applies uniformly to unitary, orthogonal, Lorentz, symplectic, and special linear matrix groups.

## Two Different Invariant Forms

> [!warning] Terminology distinction
> Artin's Chapter 9, Exercise M.11 calls
>
> $$
> B_{\mathrm{tr}}(A,A')=\operatorname{tr}(AA')
> $$
>
> the “Killing form.” In standard Lie-theory terminology this is the **trace form in the defining representation**. The standard Killing form is
>
> $$
> \kappa(A,A')
> =\operatorname{tr}(\operatorname{ad}_A\operatorname{ad}_{A'}).
> $$
>
> The two forms may be proportional on a simple classical Lie algebra, but they are not identical by definition and low-rank degeneracies must not be suppressed.

The defining trace form is symmetric and bilinear because trace is linear and $\operatorname{tr}(AA')=\operatorname{tr}(A'A)$. It is invariant under the adjoint action:

$$
B_{\mathrm{tr}}(PAP^{-1},PA'P^{-1})
=\operatorname{tr}(PAA'P^{-1})
=B_{\mathrm{tr}}(A,A').
$$

The standard Killing form is also adjoint invariant, now because

$$
\operatorname{ad}_{\operatorname{Ad}_P A}
=\operatorname{Ad}_P\operatorname{ad}_A\operatorname{Ad}_{P^{-1}}.
$$

## The Characteristic Boundary for Trace-Zero Matrices

Over any field $k$, the defining trace form on $E=\mathfrak{sl}_n(k)$ remains conjugation invariant, but its nondegeneracy depends on the characteristic. For $n\ge1$,

$$
\operatorname{rad}(B_{\mathrm{tr}}|_E)=E\cap kI_n
=\{aI_n:na=0\}.
$$

To verify this, test an element $X$ of the radical against $E_{ji}$ for $i\ne j$: all off-diagonal entries of $X$ vanish. Testing against $E_{ii}-E_{jj}$ makes its diagonal entries equal, so $X=aI_n$. Conversely, $\operatorname{tr}(aI_nY)=a\operatorname{tr}(Y)=0$ for every $Y\in E$, and membership in $E$ is exactly $na=0$. For $n=1$, $E=0$ and the same formula gives the zero radical.

Thus this form is nondegenerate exactly when $n\cdot1_k\ne0$. If $\operatorname{char}(k)\mid n$, its radical is the nonzero line $kI_n$.

> [!warning] Source boundary for the Casimir construction
> Lang XVI.15(d) invokes the nondegenerate-form construction of Exercise 14 without stating $n\cdot1_k\ne0$. That additional hypothesis is necessary for the trace form on $\mathfrak{sl}_n(k)$. Under it, the [[04 - Linear Algebra and Modules/Concepts/Casimir Tensors and Invariant Elements|Casimir tensor]] is fixed by the conjugation action, and its image under any equivariant map to an algebra with a $G$-action by algebra automorphisms is also fixed. Invariance of the form alone does not imply its nondegeneracy.

## Kernel of the Adjoint Representation

For a matrix group whose defining representation is irreducible enough that the commutant consists of scalars, the kernel of $\operatorname{Ad}$ is the center:

$$
\ker(\operatorname{Ad})=Z(G).
$$

In particular,

$$
\ker\bigl(SL_2(\mathbb C)\xrightarrow{\operatorname{Ad}}GL(\mathfrak{sl}_2)\bigr)
=\{\pm I\}.
$$

The invariant trace form identifies the image with $SO_3(\mathbb C)$, giving

$$
PSL_2(\mathbb C)\cong SO_3(\mathbb C).
$$

## Signatures of the Defining Trace Form

Using the convention (positive squares, negative squares):

| Real Lie algebra | Signature of $\operatorname{tr}(AA')$ |
|---|---|
| $\mathfrak{su}_n$ | $(0,n^2-1)$ |
| $\mathfrak{so}_n$ | $(0,n(n-1)/2)$ |
| $\mathfrak{sl}_n(\mathbb R)$ | $(n(n+1)/2-1,n(n-1)/2)$ |

For $\mathfrak{sl}_n(\mathbb R)$, the positive subspace is the symmetric trace-zero part and the negative subspace is the skew-symmetric part.

## Examples

> [!example] The Adjoint Map of $O_2$
> On $\mathfrak{so}_2=\mathbb RJ$, one has
>
> $$
> PJP^{-1}=(\det P)J.
> $$
>
> Thus the adjoint homomorphism $O_2\to O(\mathfrak{so}_2)$ is the determinant character.

> [!example] The Real Split Form
> Conjugation of $SL_2(\mathbb R)$ on its trace-zero matrices preserves a form of signature $(2,1)$ and maps onto the identity component of $O_{2,1}$ with kernel $\{\pm I\}$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Casimir Tensors and Invariant Elements|Casimir Tensors and Invariant Elements]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Artin states the adjoint action, the defining trace form, and Exercises M.11–M.13 at [S1, Ch. 9, Misc. Exs. M.11–M.13, printed p. 289, PDF p. 301]. The source terminology and missing prime in M.11 are recorded explicitly above. The standard Killing-form definition, the distinction between the two forms, the signature table, and the kernel explanations are independent exposition checked against standard finite-dimensional Lie theory.

Lang's trace-form and Casimir assertions were visually checked at [S2, Ch. XVI, Exercises 14-15, printed pp. 639-640, PDF pp. 654-655]. The characteristic-dependent radical computation above is an independent proof that exposes the missing hypothesis in Exercise 15(d); complete solutions and the invariant-tensor construction are supplied in the linked exercise notes.
