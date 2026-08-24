---
title: "Exercise LA205: Real and Imaginary Parts of a Hermitian Form"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-forms
  - skew-symmetric-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 3, Ex. 3.2, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA205: Real and Imaginary Parts of a Hermitian Form

## Problem Statement

> [!question] Exercise 3.2
> Let $(\ ,\ )$ be a positive definite Hermitian form on a complex vector space $V$, and let $\{\ ,\ \}$ and $[\ ,\ ]$ be its real and imaginary parts, the real-valued forms defined by
>
> $$
> (v,w)=\{v,w\}+[v,w]i.
> $$
>
> Prove that when $V$ is made into a real vector space by restricting scalars to $\mathbb R$, $\{\ ,\ \}$ is a positive definite symmetric form, and $[\ ,\ ]$ is a skew-symmetric form.

## Hints

> [!hint]- Hint 1
> Under restriction of scalars, complex sesquilinearity implies real bilinearity.

> [!hint]- Hint 2
> Compare real and imaginary parts of $(w,v)=\overline{(v,w)}$.

## Solution

> [!success]- Solution
> Because the Hermitian form is additive in each variable and complex-conjugate-linear in the first variable, its real and imaginary parts are additive in each variable. For real scalars $a,b$,
>
> $$
> (av,bw)=ab(v,w),
> $$
>
> so both $\{\ ,\ \}$ and $[\ ,\ ]$ are real bilinear forms after restricting scalars to $\mathbb R$.
>
> Hermitian symmetry gives
>
> $$
> (w,v)=\overline{(v,w)}
> =\{v,w\}-[v,w]i.
> $$
>
> Comparing real and imaginary parts yields
>
> $$
> \{w,v\}=\{v,w\},
> \qquad
> [w,v]=-[v,w].
> $$
>
> Hence $\{\ ,\ \}$ is symmetric and $[\ ,\ ]$ is skew-symmetric.
>
> Finally, for $v\ne0$, positive definiteness of the Hermitian form says $(v,v)>0$. This number is real, so
>
> $$
> \{v,v\}=(v,v)>0,
> \qquad
> [v,v]=0.
> $$
>
> Therefore $\{\ ,\ \}$ is positive definite.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- The conclusion uses restriction to real scalars. The real and imaginary parts are generally not complex bilinear forms.
- **Source status:** The problem statement was visually verified at [S1, Ch. 8, §3, Ex. 3.2, printed p. 254, PDF p. 266]. The solution is an independent derivation.

